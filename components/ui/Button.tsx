// 編集日時: 2026-04-21
import Link from 'next/link'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest font-medium transition-all duration-200 font-serif'
  const styles = {
    primary:   'bg-earth-700 text-earth-50 hover:bg-earth-800 border border-earth-700',
    secondary: 'bg-white text-earth-700 border border-earth-500 hover:bg-earth-50 hover:border-earth-700 hover:text-earth-900',
  }

  const cls = `${base} ${styles[variant]} ${className}`

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  )
}
