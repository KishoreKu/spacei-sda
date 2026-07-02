interface SpaceEyeLogoProps {
  size?: number
}

export default function SpaceEyeLogo({ size = 26 }: SpaceEyeLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: 'block', flex: 'none' }}>
      <path
        d="M4,20 Q20,6 36,20 Q20,34 4,20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <ellipse
        cx={20}
        cy={20}
        rx={14}
        ry={5.5}
        transform="rotate(-16 20 20)"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        opacity={0.45}
      />
      <circle cx={33.4} cy={17.6} r={2.5} fill="var(--accent, #CC785C)" />
      <circle cx={32.6} cy={16.8} r={0.6} fill="#fff" opacity={0.85} />
    </svg>
  )
}
