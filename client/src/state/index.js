import { createSlice, configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import { api } from './api'

const initialState = {
    mode:"dark",
    userId:"63701cc1f03239b7f700000e"
}

export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode:(state) =>{
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
})

export const { setMode } = globalSlice.actions

export const store = configureStore({
    reducer: {
        global: globalSlice.reducer,
        auth: authReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefault) => getDefault().concat(api.middleware)
})

export default globalSlice.reducer