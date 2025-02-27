import { useContext, useState } from 'react'
import './App.css'
import LoginContainer from './components/LoginContainer'
import MyContextProvider, { MyContext } from './store/MyContext'
import HomePage from './components/HomePage'

function App() {
  const [page, SetPage] = useState('')
  return (
    <>
    <MyContextProvider>
      {page === "home" ?   <HomePage /> : <LoginContainer   SetPage = {SetPage}/>  }
    </MyContextProvider>
    </>
  )
}

export default App
