import { createSlice } from '@reduxjs/toolkit'
import {fetchProjects} from "./projectAsyncActions";

const initialState = {
    projects: {},
}

export const projectSlice = createSlice({
    name: "project",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.fulfilled, (state, action) => {
            const projects = action.payload.results.reduce((carry, item) => {
                carry[item.id] = item
                return carry
            }, {})
            return {
                ...state,
                projects,
            }
        })
    }
})