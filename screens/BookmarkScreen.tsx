import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {appStyle} from '../AppStyle';
import {FlatList} from 'react-native-gesture-handler';
import NewsCard from '../components/NewsCard';

const BookmarkScreen = ({route}) => {
  const {toggleBookmark, bookmarks} = route.params;
  return (
    <View style={appStyle.screen}>
      <View>
        <Text style={appStyle.pageTitle}>Bookmarks</Text>
        <Text style={appStyle.pageSubTitle}>
          Double tap on any news to bookmark it.
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
            onDoublePress={() => {
              toggleBookmark(item);
            }}
          />
        )}
        ItemSeparatorComponent={<View style={{height: 15}} />}
      />
    </View>
  );
};

export default BookmarkScreen;
