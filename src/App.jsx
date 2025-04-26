import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './Pages/TodoApp'
import ProductData from './Pages/ProductData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      {/* this app made by rohit  */}
     {/* <TodoApp /> */}
     <ProductData />
    </div>
  )
}

export default App
