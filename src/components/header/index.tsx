import { LogoOutlined } from '../logo/outlined'
import { LogoSteps } from '../logo/steps'

export default function Header(): JSX.Element {
  return (
    <header className="h-[60px] flex-center p-3">
      <LogoOutlined />
      <LogoSteps />
    </header>
  )
}
