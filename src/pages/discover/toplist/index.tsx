// 排行榜
import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Toplist: React.FC<IProps> = memo(() => {
  return (
    <div>
      <h1>Toplist</h1>
    </div>
  )
})

export default Toplist
