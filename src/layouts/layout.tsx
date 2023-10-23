import { memo } from 'react'
import type { ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Layout: React.FC<IProps> = memo(() => {
  return (
    <div>
      <h1>Layout</h1>
      <Link to={'/discover'}>发现音乐</Link>
      <Link to={'/mine'}>我的音乐</Link>
      <Link to={'/friend'}>关注</Link>
      <Link to={'/download'}>下载客户端</Link>
      <Outlet />
    </div>
  )
})

export default Layout
