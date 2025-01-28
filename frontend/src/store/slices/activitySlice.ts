import { createSlice } from '@reduxjs/toolkit';

interface ActivityState {
  activities: any[]; // Adjust the type as necessary
}

const initialState: ActivityState = {
  activities: [],
};

const activitySlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    // Define your reducers here
  },
});

export const { /* your actions */ } = activitySlice.actions;
export default activitySlice.reducer; 