import { PrimaryButton } from '@/components/button/primary'
import { LogoOutlined } from '@/components/logo/outlined'
import { CatalogItem } from '@/components/catalog-item'
import { type ICatalogItem } from '@/app/api/catalog/types'
import Link from 'next/link'

export default async function Home() {
  const getData = async () => {
    const response = await fetch('http://localhost:3000/api/catalog')
    return response.json()
  }

  const catalog = (await getData()) as ICatalogItem[]

  return (
    <main className="container pb-[90px]">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-5 xl:gap-y-8">
        {catalog.map((item) => (
          <Link key={item.id} href={`/c/${item.id}`}>
            <CatalogItem {...item} />
          </Link>
        ))}
      </div>
    </main>
  )
}
