import { combineReducers } from '@reduxjs/toolkit'
import { userSlice } from "./userSlice"
import {projectSlice} from "./projectSlice"
import {taskSlice} from "./taskSlice"
import {authSlice} from "./authSlice"

export const reducer = combineReducers({
  user: userSlice.reducer,
  project: projectSlice.reducer,
  task: taskSlice.reducer,
  auth: authSlice.reducer,
})
