import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Loading: React.FC<IProps> = memo(() => {
  return (
    <>
      <h1>加载中。。。</h1>
    </>
  )
})

export default Loading
