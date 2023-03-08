import { createSlice } from '@reduxjs/toolkit'
import {fetchTasks} from "./taskAsyncActions";

const initialState = {
    tasks: {},
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            const tasks = action.payload.results.reduce((carry, item) => {
                carry[item.id] = item
                return carry
            }, {})
            return {
                ...state,
                tasks,
            }
        })
    }
})