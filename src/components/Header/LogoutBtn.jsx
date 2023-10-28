import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock md:px-4 px-1 py-2 duration-200 hover:bg-blue-100 rounded-full md:text-base text-sm text-gray-900'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn