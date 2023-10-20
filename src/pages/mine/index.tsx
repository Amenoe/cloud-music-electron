import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: React.FC<IProps> = memo(() => {
  return (
    <div>
      <h1>Mine</h1>
    </div>
  )
})

export default Mine
