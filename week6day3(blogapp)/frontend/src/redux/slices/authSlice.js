import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";


export const register = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      console.log(userData)
      const response = await axios.post(`${API_URL}/register`, userData);
      localStorage.setItem("token", response.data?.data?.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data?.data?.user));
      return response.data;
    } catch (error) { 
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userData);
      localStorage.setItem("token", response.data?.data?.accessToken);
      localStorage.setItem("refreshToken", response.data?.data?.refreshToken);
      localStorage.setItem('user',JSON.stringify(response.data?.data?.user))
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout: (state) => {
            state.user = null,
            state.token = null,
            localStorage.removeItem('token')
        }
    },
    extraReducers: (builder) => {
        builder.
            addCase(login.pending, (state) => {
                state.loading = true,
                state.error= null
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.loading = false,
                state.user = action.payload.data.user,
                state.token = action.payload.data.accessToken
            })
            .addCase(login.rejected, (state, action)=>{
                state.loading=false,
                state.error = action.payload.message
            })
            .addCase(register.pending, (state) => {
                state.loading=true,
                state.error=null
            })
            .addCase(register.fulfilled, (state, action)=>{
                state.loading= false,
                state.user=action.payload.data.user,
                state.token= action.payload.data.accessToken
            })
            .addCase(register.rejected, (state, action)=>{
                state.loading=false,
                state.error=action.payload.message
            })
    }
})


export const { logout } = authSlice.actions;
export default authSlice.reducer;