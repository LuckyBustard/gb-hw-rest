import { createSlice } from '@reduxjs/toolkit'
import {fetchUsers} from "./userAsyncActions";

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})