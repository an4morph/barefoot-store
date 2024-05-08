import { cn } from '@/utils/cn'
import Link from 'next/link'
import { BaseButtonProps } from './types'

export function BaseButton({
  link,
  noActiveTransalte,
  type = 'button',
  children,
  hoverColor,
  className,
  ...props
}: BaseButtonProps): JSX.Element {
  const button = (
    <button
      type={type}
      className={cn(
        'flex-center py-2 px-4 rounded-md',
        'hover-for-transparent after:basic-transition',
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
