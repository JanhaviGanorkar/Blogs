import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components/index'
import { Outlet } from 'react-router-dom'
import Loding from './pages/Loding'
import { ThemeProvider } from "./components/ui/theme-provider"
import { ModeToggle } from "./components/ui/mode-toggle"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className='min-h-screen flex flex-wrap content-between  text-black  bg-white dark:bg-gray-700 dark:text-white'>
      <div className='w-full block  text-black  bg-white dark:bg-gray-700 dark:text-white'>
        <Header />
        <ModeToggle/>
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    </ThemeProvider>
  ) : <Loding/>
}

export default App
