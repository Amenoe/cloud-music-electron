import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Friend: React.FC<IProps> = memo(() => {
  return (
    <div>
      <h1>Friend</h1>
    </div>
  )
})

export default Friend
