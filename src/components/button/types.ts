export interface BaseButtonProps {
  type?: 'submit' | 'reset' | 'button'
  children: React.ReactNode
  link?: string
  className?: string
  noActiveTransalte?: boolean
}