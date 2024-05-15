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
  const innerElement = (
    <span
      className={cn(
        'flex-center py-2 px-4 rounded-md w-full',
        'hoverbg-black/5 after:basic-transition',
        { 'active:translate-y-px': !noActiveTransalte },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
  return link ? (
    <Link className="flex" href={link}>
      {innerElement}
    </Link>
  ) : (
    <button type={type} {...props}>
      {innerElement}
    </button>
  )
}
