import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <span>{left}</span>
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      <span>{right}</span>
      <h2>{allClicks.join(' - ')}</h2>
    </div>
  )
}

export default App