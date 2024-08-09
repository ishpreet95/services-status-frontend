import { ReactNode } from 'react'
import { TServiceStatusTypes } from './dummyDataForTable'
import { TriangleAlert, CircleCheck, CircleX } from 'lucide-react'
import { capitalize } from 'lodash'

type TAccent = keyof typeof accents
const accents = {
  yellowish: 'text-yellow-500 bg-yellow-50 border border-yellow-500',
  greenish: 'text-green-500 bg-green-50 border border-green-500',
  reddish: 'text-red-500 bg-red-50 border border-red-500',
}

const iconClassName = 'h-4 w-4 font-bold'

type TStatusMap = {
  [K in TServiceStatusTypes]: {
    accent: TAccent
    icon: ReactNode
  }
}

const statusMap: TStatusMap = {
  up: { accent: 'greenish', icon: <CircleCheck className={iconClassName} /> },
  down: { accent: 'reddish', icon: <CircleX className={iconClassName} /> },
  fixing: {
    accent: 'yellowish',
    icon: <TriangleAlert className={iconClassName} />,
  },
}

const Chip = ({ type }: { type: TServiceStatusTypes }) => {
  return (
    <span
      className={`flex w-fit gap-1 rounded-full px-2 py-1 font-medium ${
        accents[statusMap?.[type]?.accent]
      } text-xs`}
    >
      {statusMap?.[type]?.icon}
      {capitalize(type)}
    </span>
  )
}

export const getChipForStatus = (status: TServiceStatusTypes): ReactNode => (
  <Chip type={status} />
)
