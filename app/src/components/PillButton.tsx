import { useMagneticEffect } from '@/hooks/useMagneticEffect'

interface PillButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  size?: 'default' | 'large'
  className?: string
}

export default function PillButton({ children, href, onClick, size = 'default', className = '' }: PillButtonProps) {
  const { elementRef, handleMouseMove, handleMouseLeave } = useMagneticEffect(4, 50)

  const baseClasses = `inline-flex items-center justify-center rounded-full font-sans uppercase tracking-[0.04em] border border-accent-violet bg-accent-violet text-white transition-all duration-400 hover:bg-white hover:text-deep-space hover:border-white active:scale-[0.98] hover:scale-[1.02] ${className}`

  const sizeClasses = size === 'large'
    ? 'px-12 py-4 text-base'
    : 'px-8 py-3 text-sm'

  const allClasses = `${baseClasses} ${sizeClasses}`

  if (href) {
    return (
      <div
        ref={elementRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-flex"
      >
        <a href={href} className={allClasses}>
          {children}
        </a>
      </div>
    )
  }

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex"
    >
      <button onClick={onClick} className={allClasses}>
        {children}
      </button>
    </div>
  )
}
