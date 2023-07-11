import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthData } from '../../contexts/AuthContext/authContext'

const PrivateRoute = () => {

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

    const navigate = useNavigate()
    useEffect(() => {
        if (status) {
            navigate(-1)
        }
    }, [status])
    return (
        <Outlet />
    )
}


export default PrivateRoute