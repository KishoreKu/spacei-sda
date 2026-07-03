interface SpaceEyeLogoProps {
  size?: number
}

export default function SpaceEyeLogo({ size = 26 }: SpaceEyeLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: 'block', flex: 'none' }}>
      <path
        d="M3,20 Q20,4 37,20 Q20,36 3,20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinejoin="round"
      />
      <circle cx={20} cy={20} r={7} fill="var(--accent, #CC785C)" />
      <ellipse
        cx={20}
        cy={20}
        rx={12.5}
        ry={4.2}
        transform="rotate(-18 20 20)"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        opacity={0.6}
      />
      <circle cx={17.4} cy={17.2} r={1.9} fill="#fff" opacity={0.9} />
    </svg>
  )
}
