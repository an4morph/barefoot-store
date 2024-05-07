import { LogoSteps } from '../logo/steps'

export default function Header(): JSX.Element {
  return (
    <header className="h-[60px] flex-center p-2">
      <LogoSteps className="h-full" />
    </header>
  )
}
