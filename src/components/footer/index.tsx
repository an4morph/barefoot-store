import { BasketIcon } from '@/components/icons/basket'
import { InfoIcon } from '../icons/info'
import { GridIcon } from '../icons/grid'
import Link from 'next/link'

const elements = [
  {
    key: 1,
    icon: <InfoIcon />,
    name: 'information',
    link: '/info',
  },
  {
    key: 2,
    icon: <GridIcon />,
    name: 'catalog',
    link: '/',
  },
  {
    key: 3,
    icon: <BasketIcon />,
    name: 'basket',
    link: '/basket',
  },
]

export default function Footer(): JSX.Element {
  return (
    <footer className="flex">
      {elements.map(({ link, key, icon }) => (
        <Link
          className="block w-full hover:bg-slate-200 h-auto"
          href={link}
          key={key}
        >
          {icon}
        </Link>
      ))}
    </footer>
  )
}
