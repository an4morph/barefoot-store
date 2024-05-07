import { BaseButton } from '@/components/button/base'
import { BaseButtonProps } from './types'

export function PrimaryButton({
  children,
  ...props
}: BaseButtonProps): JSX.Element {
  return (
    <BaseButton className="bg-brand rounded-md" {...props}>
      {children}
    </BaseButton>
  )
}
