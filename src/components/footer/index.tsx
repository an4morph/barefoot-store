import Link from 'next/link'
import { BasketIcon } from '@/components/icons/basket'
import { InfoIcon } from '../icons/info'
import { GridIcon } from '../icons/grid'

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
    <footer className="flex w-full h-[60px] fixed z-50 bottom-0 left-0 bg-slate-100">
      {elements.map(({ link, key, icon }, index) => (
        <Link
          className="full hover:bg-slate-200 flex-center basic-transition"
          href={link}
          key={key}
        >
          {icon}
        </Link>
      ))}
    </footer>
  )
}
