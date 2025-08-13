import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
            state.error = null
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.isAuthenticated = true
            state.user = action.payload.user
            state.token = action.payload.token
            state.error = null
            localStorage.setItem('token', action.payload.token)
        },
        loginFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
            state.isAuthenticated = false
            state.user = null
            state.token = null
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            state.loading = false
            state.error = null
            localStorage.removeItem('token')
        },
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
        clearError: (state) => {
            state.error = null
        }
    }
})

export const { 
    loginStart, 
    loginSuccess, 
    loginFailure, 
    logout, 
    setUser, 
    clearError 
} = authSlice.actions

export default authSlice.reducer
