import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth'

export const register = createAsyncThunk(
    'auth/registerUser', 
    async(userData, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL}/register`, userData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

 export const login = createAsyncThunk(
    'auth/loginUser',
    async(userData, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL}/login`, userData)
            localStorage.setItem('token',response.data.data.accessToken)
            localStorage.setItem('user', JSON.stringify(response.data.data.user))
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const initialState = {
    user: null,
    token:null,
    loading:false,
    error:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout : (state) => {
            state.user = null;
            state.token = null;
            state.loading=false;
            state.error=null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error=null;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.data.user;
        })
        .addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        })
        .addCase(login.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(login.fulfilled, (state, action) =>{
            state.loading=false;
            state.user=action.payload.data.user;
            state.token=action.payload.data.accessToken;
            console.log(action.payload.data.user, state.token)
        })
        .addCase(login.rejected, (state, action)=> {
            state.loading=false,
            state.error=action.payload.message
        })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;