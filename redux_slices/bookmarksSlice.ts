import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';

const initialBookmarks: News[] = [];

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: initialBookmarks,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<News>) => {
      const bookmarkIndex = state.findIndex(
        bookmark => bookmark.title === action.payload.title,
      );

      if (bookmarkIndex !== -1) {
        // Bookmark available, hence remove

        state.splice(bookmarkIndex, 1);

        ToastAndroid.show('Removed from bookmarks', ToastAndroid.SHORT);
      } else {
        // Bookmark not available, hence add

        state.push(action.payload);

        ToastAndroid.show('Added to bookmarks', ToastAndroid.SHORT);
      }

      //   if (foundBookmarkIndex === -1) {
      //     state.push(action.payload);
      //   } else {
      //     state.splice(foundBookmarkIndex, 1);
      //   }
    },
  },
});

export const {toggleBookmark} = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
