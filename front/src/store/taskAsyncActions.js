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