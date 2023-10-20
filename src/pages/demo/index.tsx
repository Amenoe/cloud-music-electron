import { Radio } from 'antd'
import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Demo: React.FC<IProps> = memo(() => {
  return (
    <div>
      <h1>Demo</h1>
      <div>
        <Radio>antd</Radio>
        <input type="radio" autoComplete="off" />
        原生
      </div>
    </div>
  )
})

export default Demo
