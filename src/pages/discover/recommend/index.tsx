// 推荐
import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = memo(() => {
  return (
    <div>
      <h1>推荐</h1>
    </div>
  )
})

export default Recommend
