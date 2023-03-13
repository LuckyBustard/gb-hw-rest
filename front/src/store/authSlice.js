import { createSlice } from '@reduxjs/toolkit'
import {authUser, logoutUser} from "./authAsyncActions"

const initialState = {
    username: false,
    token: false,
}

export const authSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(authUser.fulfilled, (state, action) => {
            const {username, token} = action.payload
            return {
                ...state,
                username,
                token,
            }
        })

        builder.addCase(logoutUser.fulfilled, (state) => ({...state, username: false, token: false}))
    }
})