import { createAsyncThunk } from "@reduxjs/toolkit"
import {projectApi} from "../api/project";

export const fetchProjects = createAsyncThunk(
  'users/fetchProjects',
  async () => {
      try {
          return  await projectApi.fetchProjects()
      } catch (e) {
          console.log(e)
      }
  }
)