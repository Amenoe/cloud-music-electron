import React, { memo } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
const App = memo(() => {
  return (
    <div>
      <div className="main">
        <RouterProvider router={router} />
      </div>
    </div>
  )
})

export default App
