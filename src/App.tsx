import React, { Suspense, memo } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './routes'
const App = memo(() => {
  return (
    <div>
      <h2>App</h2>
      <Link to={'/discover'}>发现音乐</Link>
      <Link to={'/mine'}>我的音乐</Link>
      <Link to={'/friend'}>关注</Link>
      <Link to={'/download'}>下载客户端</Link>
      <Suspense fallback="Loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
})

export default App
