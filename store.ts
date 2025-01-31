import {configureStore} from '@reduxjs/toolkit';
import {bookmarksSlice} from './redux_slices/bookmarksSlice';

export const store = configureStore({
  reducer: {bookmarks: bookmarksSlice.reducer},
});

export type AppRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
