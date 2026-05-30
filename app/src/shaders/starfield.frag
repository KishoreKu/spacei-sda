precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec3 u_starColor;

#define LAYERS 8
#define STAR_DENSITY 200.0
#define DEPTH 8.0
#define BRIGHTNESS 0.8
#define BASE_SPEED 0.3

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash2(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

float starBrightness(vec2 starPos, float size, float layerDepth) {
  float t = u_time * BASE_SPEED;
  float twinkle = noise(starPos * 3.0 + t * 0.2) * noise(starPos * 5.0 - t * 0.3);
  twinkle = 0.7 + 0.3 * twinkle;
  float flare = pow(max(twinkle - 0.5, 0.0) * 2.0, 4.0) * 0.4;
  return clamp((twinkle + flare) * BRIGHTNESS * (1.0 - layerDepth * 0.1), 0.0, 1.0);
}

float depthOfField(float distFromCenter) {
  float dofAmount = length(distFromCenter) * 0.8;
  return 0.6 + 0.4 * exp(-dofAmount * dofAmount * 2.0);
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 centered = (fragCoord - u_resolution * 0.5) / min(u_resolution.x, u_resolution.y);

  vec2 mouseShift = vec2(0.0);
  if (u_mouse.x > 0.0) {
    mouseShift = -(u_mouse / u_resolution - 0.5) * 0.5;
  }

  vec3 finalColor = vec3(0.0);
  float totalStars = 0.0;

  for (int layer = 0; layer < LAYERS; layer++) {
    float layerDepth = float(layer) / float(LAYERS);
    float scale = 10.0 + layerDepth * 90.0;
    float speed = 1.0 + layerDepth * 3.0;
    vec2 pos = (fragCoord + mouseShift * u_resolution) * scale / u_resolution.x;

    if (u_time > 0.0) {
      pos.y -= u_time * speed * 0.1;
    }

    vec2 cell = floor(pos);
    vec2 f = fract(pos);
    float layerBrightness = 0.0;

    for (int dx = -1; dx <= 1; dx++) {
      for (int dy = -1; dy <= 1; dy++) {
        vec2 starCell = cell + vec2(float(dx), float(dy));
        vec2 cellHash = hash2(starCell + layerDepth * 100.0);

        if (cellHash.x > 0.92) continue;

        vec2 starPos = cellHash - 0.5;
        float dist = length(f - starPos - vec2(float(dx), float(dy)));
        float starSize = 0.02 + cellHash.y * 0.03 * (1.0 - layerDepth * 0.3);
        float brightness = starBrightness(starCell, starSize, layerDepth);
        float glow = exp(-dist * dist / (starSize * starSize * 2.0));
        float coreGlow = exp(-dist * dist / (starSize * starSize * 0.5));
        float totalGlow = glow * 0.6 + coreGlow * 0.4;
        layerBrightness += totalGlow * brightness;
      }
    }

    float dof = depthOfField(centered * (0.5 + layerDepth));

    vec3 starTint;
    if (u_starColor.r >= 0.0) {
      starTint = mix(vec3(0.8, 0.9, 1.0), u_starColor, layerDepth * 0.6);
    } else {
      starTint = vec3(0.8, 0.9, 1.0);
    }

    finalColor += starTint * layerBrightness * dof * (1.0 - layerDepth * 0.3);
    totalStars += layerBrightness;
  }

  float nebula = fbm(centered * 3.0 + u_time * 0.01) * fbm(centered * 2.0 - u_time * 0.015);
  vec3 nebulaColor = mix(vec3(0.02, 0.0, 0.04), vec3(0.0, 0.01, 0.03), noise(centered * 2.0));
  finalColor += nebulaColor * nebula * 0.3;

  float vig = 1.0 - dot(centered, centered) * 0.5;
  vig = clamp(vig, 0.0, 1.0);
  finalColor *= vig;

  finalColor = finalColor / (1.0 + finalColor * 0.3);
  finalColor = pow(finalColor, vec3(0.95));

  gl_FragColor = vec4(finalColor, 1.0);
}
