import { useState } from 'react'
import './App.css'
import LoginContainer from './components/LoginContainer'
import MyContextProvider from './store/MyContext'

function App() {
  return (
    <>
    <MyContextProvider>
    <LoginContainer></LoginContainer>
    </MyContextProvider>
    </>
  )
}

export default App
