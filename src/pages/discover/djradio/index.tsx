// 电台
import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Djradio: React.FC<IProps> = memo(() => {
  return (
    <div>
      <h1>Djradio</h1>
    </div>
  )
})

export default Djradio
