import React, { memo } from 'react'
import { Button } from 'antd'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
const App = memo(() => {
  return (
    <div>
      <h2>App</h2>
      <Button type="primary">antd按钮</Button>
      {useRoutes(routes)}
    </div>
  )
})

export default App
