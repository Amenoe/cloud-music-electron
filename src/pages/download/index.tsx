// 下载
import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: React.FC<IProps> = memo(() => {
  return (
    <div>
      <h1>Download</h1>
    </div>
  )
})

export default Download
