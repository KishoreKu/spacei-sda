interface GhostButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export default function GhostButton({ children, href, onClick, className = '' }: GhostButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-sans uppercase tracking-[0.04em] border border-white/30 bg-transparent text-white px-8 py-3 text-sm transition-all duration-400 ease-out hover:bg-white/10 hover:border-white/60 hover:scale-[1.02] active:scale-[0.98] ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return <button onClick={onClick} className={classes}>{children}</button>
}
