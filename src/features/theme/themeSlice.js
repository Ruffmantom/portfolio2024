// reducers and initial state file
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import themeService from './themeService'

const initialState = {
    theme: 'light',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const setTheme = createAsyncThunk('setTheme', async (theme, thunkAPI) => {
    try {
      // console.log('Set theme');
      return await themeService.saveThemeToLocalStorage(theme);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      throw new Error(message);
    }
  });
  
  export const getTheme = createAsyncThunk('getTheme', async (thunkAPI) => {
    try {
      // console.log('Getting theme');
      return await themeService.getTheme();
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      throw new Error(message);
    }
  });
  

// export the slice
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(setTheme.pending, (state) => {
                state.isLoading = true
            })
            .addCase(setTheme.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.theme = action.payload

            })
            .addCase(setTheme.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getTheme.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTheme.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.theme = action.payload

            })
            .addCase(getTheme.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = themeSlice.actions;
export default themeSlice.reducer;