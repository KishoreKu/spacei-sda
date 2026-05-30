interface StatusBadgeProps {
  label: string
}

export default function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20">
      <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse-dot" />
      <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-accent-blue">
        {label}
      </span>
    </span>
  )
}
