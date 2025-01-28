import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import activityReducer from './slices/activitySlice';
import progressReducer from './slices/progressSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    activities: activityReducer,
    progress: progressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 