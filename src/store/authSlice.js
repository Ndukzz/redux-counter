import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: "isAuthenticated",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

export const authActions = authSlice.actions;       //EXPORTING ACTIONS IN REDUCERS

export default authSlice;