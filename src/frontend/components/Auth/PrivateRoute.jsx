import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuthData } from '../../contexts/AuthContext/authContext'

export const PrivateRoute = () => {

    const navigate = useNavigate()

    const { user: { status } } = useAuthData()


    useEffect(() => {
        if (!status) {
            navigate('/login')
        }
    }, [status])

    return (
        <Outlet />
    )
}

export const IsAuthenticated = () => {
    const { user: { status } } = useAuthData()
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {

        if (location.pathname === "/signup") {
            navigate('/')
        } else if (status) {
            navigate(-1)
        }


    }, [status])
    return (
        <Outlet />
    )
}


