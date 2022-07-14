import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../endpoints";

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formData);
      toast.success("You are now logged in");
      navigate("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUpAction = createAsyncThunk(
  "auth/register",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formData);
      toast.success("Registration successful");
      navigate("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    isLoading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogOut : (state, action) =>{
      localStorage.clear()
        state.user = null
    }
  },
  extraReducers: {
    [loginAction.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [loginAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },

    [signUpAction.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signUpAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [signUpAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setUser, setLogOut } = authSlice.actions;

export default authSlice.reducer;
