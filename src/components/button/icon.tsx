import { BaseButton } from '@/components/button/base'
import { BaseButtonProps } from './types'
import { cn } from '@/utils/cn'

export function IconButton({
  children,
  ...props
}: BaseButtonProps): JSX.Element {
  return (
    <BaseButton
      className={cn(
        'rounded-md w-10 h-10 p-0 ',
        // styles for inner elements
        '[&>svg]:w-5 [&>svg]:h-5',
        // styles for hovering
        'hover-for-transparent'
      )}
      {...props}
    >
      {children}
    </BaseButton>
  )
}
