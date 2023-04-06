import { createAsyncThunk } from "@reduxjs/toolkit"
import {taskApi} from "../api/task";

export const fetchTasks = createAsyncThunk(
  'users/fetchTasks',
  async () => {
      try {
          return await taskApi.fetchTasks()
      } catch (e) {
          console.log(e)
      }
  }
)

export const addTask = createAsyncThunk(
  'users/addTask',
  async (data) => {
      try {
          return await taskApi.addTask(data)
      } catch (e) {
          console.log(e)
      }
  }
)

export const updateTask = createAsyncThunk(
  'users/updateTask',
  async ({id, data}) => {
      try {
          return await taskApi.editTask(id, data)
      } catch (e) {
          console.log(e)
      }
  }
)

export const deleteTask = createAsyncThunk(
  'users/deleteTask',
  async (id) => {
      try {
          return await taskApi.deleteTask(id)
      } catch (e) {
          console.log(e)
      }
  }
)