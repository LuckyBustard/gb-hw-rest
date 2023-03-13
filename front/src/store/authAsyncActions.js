import { createAsyncThunk } from "@reduxjs/toolkit"
import { authApi } from "../api/authApi"

export const authUser = createAsyncThunk(
  'auth/authUser',
  async ({username, password}) => {
      try {
          const result = await authApi.auth(username, password)
          return { username, token: result.token }
      } catch (e) {
          console.log(e)
      }
  }
)

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async () => {
      try {
          authApi.logout()
      } catch (e) {
          console.log(e)
      }
  }
)