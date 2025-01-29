import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import {appStyle} from '../AppStyle';
import Icon from '@react-native-vector-icons/material-design-icons';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

const SearchScreen = ({route}) => {
  const {toggleBookmark} = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedNews, setSearchedNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const startQuerySearch = async () => {
    if (searchQuery.trim() === '') {
      ToastAndroid.show('Please input search query', ToastAndroid.SHORT);
      return;
    }

    setIsLoading(true);
    setSearchedNews([]);
    try {
      const apiKey = process.env.NEWS_API_KEY;
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`,
      );
      if (response.status === 200) {
        if (!response.data.articles || response.data.articles.length === 0) {
          ToastAndroid.show('News not found', ToastAndroid.SHORT);
          return;
        }
        setSearchedNews(response.data.articles);
      } else {
        throw new Error('Response invalid: ' + response);
      }
    } catch (error) {
      console.error('Error fetching search news : ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={appStyle.screen}>
      <View>
        <Text style={appStyle.pageTitle}>Search</Text>
        <Text style={appStyle.pageSubTitle}>Search news by query</Text>
      </View>

      <View style={style.inputContainer}>
        <TextInput
          placeholder="for e.g. artifical intelligence"
          placeholderTextColor={'#a0a98a'}
          style={style.input}
          numberOfLines={1}
          onChangeText={newQuery => {
            setSearchQuery(newQuery);
          }}
        />
        <Icon
          name="search-web"
          onPress={startQuerySearch}
          size={25}
          color={'#353b29'}
          style={style.inputButton}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={searchedNews}
          renderItem={({item}) => (
            <NewsCard
              newsTitle={item.title}
              newsDescription={item.description}
              newsSourceName={item.source.name}
              newsImageUrl={item.urlToImage}
              onDoublePress={() => {}}
            />
          )}
          initialNumToRender={5}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          contentContainerStyle={appStyle.newsContainer}
        />
      )}
    </View>
  );
};

const ListItemSeparatorComponent = () => <View style={{height: 15}} />;

const style = StyleSheet.create({
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 30,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#c1cabb',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  inputButton: {
    width: 25,
  },
});

export default SearchScreen;
