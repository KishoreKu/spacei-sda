interface OverlineLabelProps {
  children: React.ReactNode
  className?: string
}

export default function OverlineLabel({ children, className = '' }: OverlineLabelProps) {
  return (
    <p className={`text-[12px] font-medium uppercase tracking-[0.08em] text-accent-violet mb-4 ${className}`}>
      {children}
    </p>
  )
}
