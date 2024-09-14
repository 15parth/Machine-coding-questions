import { useState } from 'react'
import InfiniteScroll from './InfiniteScroll'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InfiniteScroll/>
    </>
  )
}

export default App
