import { createSlice } from '@reduxjs/toolkit';

interface ProgressState {
  progress: number; // Adjust the type as necessary
}

const initialState: ProgressState = {
  progress: 0,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    // Define your reducers here
  },
});

export const { /* your actions */ } = progressSlice.actions;
export default progressSlice.reducer; 