import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
  userId: string | null
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  userId: localStorage.getItem('userId'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; userId: string }>) => {
      state.token = action.payload.token
      state.userId = action.payload.userId
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('userId', action.payload.userId)
    },
    logout: (state) => {
      state.token = null
      state.userId = null
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    },
  },
})

export const { login, logout } = authSlice.actions
export const authReducer = authSlice.reducer
