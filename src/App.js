import './App.css'
import Test from './Test'
import { useState } from 'react'
function App () {
  const [isUnmount,setIsUnmount]=useState(true);

  return (
    <div className="App">
      {isUnmount && <Test/>}
      <button onClick={()=>{setIsUnmount(!isUnmount)}}>切换</button>
    </div>
  )
}


export default App

