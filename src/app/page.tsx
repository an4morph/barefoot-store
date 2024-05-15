import { PrimaryButton } from '@/components/button/primary'

export default function Home() {
  return (
    <main className="container">
      <PrimaryButton noActiveTransalte link="/fitting" className="w-[200px]">
        Хочу примерить!
      </PrimaryButton>
    </main>
  )
}
