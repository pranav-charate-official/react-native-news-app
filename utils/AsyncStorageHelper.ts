import AsyncStorage from '@react-native-async-storage/async-storage';

const bookmarks_key = '@bookmarks';

export const saveBookmarks = async (bookmarks: News[]) => {
  try {
    const bookmarkJsonString = JSON.stringify(bookmarks);
    await AsyncStorage.setItem(bookmarks_key, bookmarkJsonString);
  } catch (error) {
    console.error('Error saving bookmarks: ', error);
  }
};

export const getBookmarks = async () => {
  try {
    const bookmarkJsonString = await AsyncStorage.getItem(bookmarks_key);
    return bookmarkJsonString != null ? JSON.parse(bookmarkJsonString) : [];
  } catch (error) {
    console.error('Error getting bookmarks: ', error);
  }
};
