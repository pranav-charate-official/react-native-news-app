import React, {useRef} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {assets} from '../assets/assets';

type NewsCardProps = {
  newsSourceName: string;
  newsTitle: string;
  newsDescription: string;
  newsImageUrl: string;
  onDoublePress: () => void;
};

const NewsCard = (newsCardProps: NewsCardProps) => {
  const doubleTapRef = useRef(null);
  return (
    <TapGestureHandler
      ref={doubleTapRef}
      numberOfTaps={2}
      onActivated={() => {
        // newsCardProps.onDoublePress();
      }}>
      <View style={newsCardStyle.container}>
        <Image
          source={
            newsCardProps.newsImageUrl
              ? {uri: newsCardProps.newsImageUrl}
              : assets.newsPlaceholder
          }
          style={newsCardStyle.image}
        />

        <View style={newsCardStyle.containerRight}>
          <Text style={newsCardStyle.newsTitle}>{newsCardProps.newsTitle}</Text>
          <Text style={newsCardStyle.newsDescription}>
            {newsCardProps.newsDescription?.length > 150
              ? newsCardProps.newsDescription.substring(0, 150) + '...'
              : newsCardProps.newsDescription}
          </Text>
          <Text style={newsCardStyle.newsSourceName}>
            {newsCardProps.newsSourceName}
          </Text>
        </View>
      </View>
    </TapGestureHandler>
  );
};

const newsCardStyle = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    elevation: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    flex: 3,
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  containerRight: {
    flex: 6,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 8,
    gap: 3,
  },
  newsTitle: {
    fontSize: 15,
    fontWeight: 700,
  },
  newsSourceName: {
    fontSize: 14,
    fontWeight: 500,
    color: '#5b5b5b',
  },
  newsDescription: {
    fontSize: 13,
    color: '#7a7a7a',
  },
});

export default NewsCard;
