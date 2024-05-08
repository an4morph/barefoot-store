import { BaseButton } from '@/components/button/base'
import { IconButton } from '@/components/button/icon'
import { PrimaryButton } from '@/components/button/primary'
import { BasketIcon } from '@/components/icons/basket'
import { InfoIcon } from '@/components/icons/info'

export default function Home() {
  return (
    <main className="container">
      <PrimaryButton noActiveTransalte link="/fitting">
        Хочу примерить!
      </PrimaryButton>

      <div className="bg-sky-200 p-4">
        <BaseButton>Хочу примерить!</BaseButton>
        <IconButton>
          <BasketIcon />
        </IconButton>
        <IconButton>
          <InfoIcon />
        </IconButton>
      </div>
    </main>
  )
}
