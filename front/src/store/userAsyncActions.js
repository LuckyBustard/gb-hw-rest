import { createAsyncThunk } from "@reduxjs/toolkit"
import {userApi} from "../api/user";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
      try {
          return  await userApi.fetchUsers()
      } catch (e) {
          console.log(e)
      }
  }
)