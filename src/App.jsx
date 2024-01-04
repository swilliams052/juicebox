import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Bookmarks from './components/bookmarks'
import Posts from './components/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Login />
     <Register />
     {/* <Bookmarks /> */}
     <Posts />
    </>
  )
}

export default App
