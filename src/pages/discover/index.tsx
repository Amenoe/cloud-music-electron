// 发现页
import { memo } from 'react'
import type { ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: React.FC<IProps> = memo(() => {
  return (
    <div>
      <Link to={'/discover/recommend'}>推荐</Link>
      <Link to={'/discover/toplist'}>排行榜</Link>
      <Link to={'/discover/playlist'}>歌单</Link>
      <Link to={'/discover/djradio'}>主播电台</Link>
      <Link to={'/discover/artist'}>歌手</Link>
      <Outlet />
    </div>
  )
})

export default Discover
