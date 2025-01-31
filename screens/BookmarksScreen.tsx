import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {appStyle} from '../AppStyle';
import {useAppSelector} from '../hooks';
import NewsCard from '../components/NewsCard';

const BookmarksScreen = () => {
  const bookmarks = useAppSelector(state => state.bookmarks);

  return (
    <View style={appStyle.screen}>
      <View>
        <Text style={appStyle.pageTitle}>Bookmarks</Text>
        <Text style={appStyle.pageSubTitle}>
          Find out news bookmarked by you
        </Text>
      </View>

      <FlatList
        data={bookmarks}
        renderItem={({item}) => (
          <NewsCard
            newsTitle={item.title}
            newsDescription={item.description}
            newsSourceName={item.source.name}
            newsImageUrl={item.urlToImage}
          />
        )}
        ListEmptyComponent={BookmarkListEmptyComponent}
        ItemSeparatorComponent={ListItemSeparatorComponent}
        initialNumToRender={5}
        contentContainerStyle={appStyle.newsContainer}
      />
    </View>
  );
};

const BookmarkListEmptyComponent = () => (
  <Text
    style={{
      textAlign: 'center',
      fontSize: 18,
      color: '#a4b383',
    }}>
    No bookmarks yet. Double tap on any news to bookmark it.
  </Text>
);

const ListItemSeparatorComponent = () => <View style={{height: 15}} />;

export default BookmarksScreen;
