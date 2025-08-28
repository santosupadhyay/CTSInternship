import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'http://localhost:3000/api/blogs'

export const fetchBlogs = createAsyncThunk (
    'blogs/fetchBlogs',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong')
        }
    }
)

const initialState = {
    blogs:[],
    loading:false,
    error:null
}

const blogSlice = createSlice ({
    name:'blog',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlogs.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.loading= false,
            state.blogs = action.payload;
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
    }
})

export default blogSlice.reducer;