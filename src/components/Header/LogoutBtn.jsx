import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { Button } from '../index'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <Button type='submit'
    onClick={logoutHandler} className='bg-black dark:bg-white'
    >Logout</Button>
  )
}

export default LogoutBtn