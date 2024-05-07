import { BaseButton } from '@/components/button/base'
import { PrimaryButton } from '@/components/button/primary'

export default function Home() {
  return (
    <main className="container">
      <PrimaryButton noActiveTransalte link="/fitting">
        Хочу примерить!
      </PrimaryButton>
      <BaseButton>Хочу примерить!</BaseButton>
    </main>
  )
}
