import { cn } from '@/utils/cn'
import Link from 'next/link'
import { BaseButtonProps } from './types'

export function BaseButton({
  link,
  noActiveTransalte,
  type = 'button',
  children,
  className,
  ...props
}: BaseButtonProps): JSX.Element {
  const button = (
    <button
      type={type}
      className={cn(
        'flex-center py-2 px-4',
        'hover:brightness-95',
        { 'active:translate-y-px': !noActiveTransalte },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
  return link ? (
    <Link className="flex" href={link}>
      {button}
    </Link>
  ) : (
    button
  )
}
