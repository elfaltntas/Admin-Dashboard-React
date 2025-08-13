import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { CircularProgress, Box } from '@mui/material'
import { setUser, logout } from '../state/authSlice'
import { authAPI } from '../state/authApi'

const ProtectedRoute = ({ children }) => {
    const { token, isAuthenticated, user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyToken = async () => {
            if (token) {
                try {
                    const data = await authAPI.verifyToken(token)
                    dispatch(setUser(data.user))
                } catch (error) {
                    // Token invalid, will redirect to login
                    dispatch(logout())
                } finally {
                    setLoading(false)
                }
            } else {
                setLoading(false)
            }
        }

        verifyToken()
    }, [token, dispatch])

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CircularProgress />
            </Box>
        )
    }

    if (!token || !isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute
