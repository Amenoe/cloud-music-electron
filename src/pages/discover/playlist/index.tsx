// 歌单
import { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Playlist: React.FC<IProps> = memo(() => {
  return (
    <div>
      <h1>Playlist</h1>
    </div>
  )
})

export default Playlist
