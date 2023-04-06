import { createAsyncThunk } from "@reduxjs/toolkit"
import {projectApi} from "../api/project";

export const fetchProjects = createAsyncThunk(
  'users/fetchProjects',
  async (data = null) => {
      try {
          return await projectApi.fetchProjects(data)
      } catch (e) {
          console.log(e)
      }
  }
)

export const addProject = createAsyncThunk(
  'users/addProject',
  async (data) => {
      try {
          return await projectApi.addProject(data)
      } catch (e) {
          console.log(e)
      }
  }
)

export const updateProject = createAsyncThunk(
  'users/updateProject',
  async ({id, data}) => {
      try {
          console.log(id, data)
          return await projectApi.editProject(id, data)
      } catch (e) {
          console.log(e)
      }
  }
)

export const deleteProject = createAsyncThunk(
  'users/updateProject',
  async (id) => {
      try {
          return await projectApi.deleteProject(id)
      } catch (e) {
          console.log(e)
      }
  }
)