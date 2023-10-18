import React, { memo } from 'react'

const App = memo(() => {
  const name = 'a'
  return (
    <div>
      123 App
      <h2>{name}</h2>
    </div>
  )
})

export default App
