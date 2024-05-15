import { BaseButton } from '@/components/button/base'
import { BaseButtonProps } from './types'
import { cn } from '@/utils/cn'

export function PrimaryButton({
  children,
  className,
  ...props
}: BaseButtonProps): JSX.Element {
  return (
    <BaseButton className={cn('bg-brand rounded-md', className)} {...props}>
      {children}
    </BaseButton>
  )
}
