import { useState } from 'react'

const Display = ({counter}) => {
  return (
    <div><h1>{counter}</h1></div>
  )
}

const Button = ({action, text}) => {
  return (
    <button onClick = {action}>{text}</button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const text1 = '+'
  const text2 = 'Reset'

console.log('Button has been clicked '+counter+' times.')

  return (
    <div>
      <Display counter={counter} />
      <Display counter={counter / 2} />
      <Display counter={counter * 2} />
      <Button action={increaseByOne} text={text1} />
      <Button action={setToZero} text={text2} />
    </div>
  )
}

export default App
