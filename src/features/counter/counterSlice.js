// import {createReducer} from "@reduxjs/toolkit"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
  allData: { loading: false, status: "", newsData: []},
  singleData: { loading: false, status: "", newsData: [] },

};

export const FetchNewsAPI = createAsyncThunk(
  "user/fetchUser",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const FetchSingleNewsAPI = createAsyncThunk(
  "user/singlefetch",
  async (payload, thunkAPI) => {
    try { 
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value+=1
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(FetchNewsAPI.pending, (state, action) => {
      state.allData.loading = false;
    });
    builder.addCase(FetchNewsAPI.fulfilled, (state, action) => {
      state.allData.loading = true;
      state.allData.status = "Success";
      state.allData.newsData = action.payload;
    });
    builder.addCase(FetchNewsAPI.rejected, (state, action) => {
      state.allData.loading = false;
      state.allData.status = "Error";
      state.allData.newsErrorData = action.payload;
    });

    
    builder.addCase(FetchSingleNewsAPI.pending, (state, action) => {
      state.singleData.loading = false;
    });
    builder.addCase(FetchSingleNewsAPI.fulfilled, (state, action) => {
      state.singleData.loading = true;
      state.singleData.status = "Success";
      state.singleData.newsData = action.payload;
    });
    builder.addCase(FetchSingleNewsAPI.rejected, (state, action) => {
      state.singleData.loading = false;
      state.singleData.status = "Error";
      state.singleData.newsErrorData = action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount} = CounterSlice.actions;
export default CounterSlice.reducer;