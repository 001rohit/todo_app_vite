import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './Pages/TodoApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      {/* this app made by rohit  */}
     <TodoApp />
    </div>
  )
}

export default App
