import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {appStyle} from '../AppStyle';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import {FlatList} from 'react-native-gesture-handler';

const FeedScreen = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const loadNews = async () => {
  //     try {
  //       const newsData = await fetchTopHeadlines();
  //       setNews(newsData);
  //     } catch (error) {
  //       console.error('Failed to fetch top news headlines: ', error);
  //     }
  //   };
  //   loadNews();
  // }, []);

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      try {
        const apiKey = process.env.NEWS_API_KEY;
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey,
        );
        if (response.status === 200) {
          setNews(response.data.articles);
        } else {
          throw new Error('Response invalid: ' + response);
        }
      } catch (error) {
        console.error('Error fetching news : ', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadNews();
  }, []);

  return (
    <View style={appStyle.screen}>
      <View>
        <Text style={appStyle.pageTitle}>Feed</Text>
        <Text style={appStyle.pageSubTitle}>Discover top headlines</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={news}
          renderItem={({item}) => (
            <NewsCard
              newsTitle={item.title}
              newsDescription={item.description}
              newsSourceName={item.source.name}
              newsImageUrl={item.urlToImage}
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

export default FeedScreen;
