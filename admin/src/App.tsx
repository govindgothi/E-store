import { Outlet } from 'react-router'
import './App.css'

function App() {


  return (
    <>
    <div className='bg-gray-100  w-screen h-screen'>
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default App
