// 歌手
import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: React.FC<IProps> = memo(() => {
  return (
    <div>
      <h1>Artist</h1>
    </div>
  )
})

export default Artist
