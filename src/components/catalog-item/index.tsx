import Image from 'next/image'
import { cn } from '@/utils/cn'
import { CatalogItemStatus, type ICatalogItem } from '@/app/api/catalog/types'

interface Props
  extends Pick<
    ICatalogItem,
    'id' | 'images' | 'brand' | 'price' | 'anotherColors' | 'status'
  > {}

export function CatalogItem({
  id,
  images,
  brand,
  price,
  anotherColors,
  status,
}: Props): JSX.Element {
  return (
    <div key={id}>
      <div className="relative overflow-hidden rounded-xl mb-3">
        <div
          className={cn(
            'text-sm font-medium py-0.5 px-3 absolute top-2 right-2 rounded-lg z-10 text-slate-900/70',
            {
              'bg-lime-500 text-white': status === CatalogItemStatus.stock,
              'bg-slate-300': status === CatalogItemStatus.no,
              'bg-yellow-300': status === CatalogItemStatus.order,
            }
          )}
        >
          {status === CatalogItemStatus.stock && 'в наличие'}
          {status === CatalogItemStatus.no && 'не доступен'}
          {status === CatalogItemStatus.order && 'на заказ'}
        </div>
        <Image
          src={images[0]}
          width={500}
          height={500}
          alt={brand}
          priority
          className={cn('full aspect-square object-cover', {
            'filter grayscale-[10%] contrast-50':
              status === CatalogItemStatus.no,
          })}
        />
      </div>
      <div className="flex space-between sm:gap-4 flex-col sm:flex-row">
        <div className="grow">
          <h2>{brand}</h2>
          <data
            value={price}
            className="text-xl font-semibold text-emerald-600"
          >
            {price} сом
          </data>
        </div>
        <div className="sm:text-right">
          {anotherColors.length ? (
            <div className="text-slate-400 text-sm">
              {anotherColors.length} цветов
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
