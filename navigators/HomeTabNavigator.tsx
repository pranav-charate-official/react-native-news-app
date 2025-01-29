import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {StyleSheet, ToastAndroid} from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import Icon from '@react-native-vector-icons/material-design-icons';
import BookmarkScreen from '../screens/BookmarkScreen';
import {getBookmarks, saveBookmarks} from '../utils/AsyncStorageHelper';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  const [bookmarks, setBookmarks] = useState<News[]>([]);

  useEffect(() => {
    const loadBookmarks = async () => {
      const savedBookmarks = await getBookmarks();
      setBookmarks(savedBookmarks);
    };
    // loadBookmarks();
  }, []);

  const toggleBookmark = (newsItem: News) => {
    const isBookmarked = bookmarks.some(item => item.title === newsItem.title);
    const updatedBookmarks = isBookmarked
      ? bookmarks.filter(item => item.title !== newsItem.title)
      : [...bookmarks, newsItem];
    saveBookmarks(updatedBookmarks);
    // ToastAndroid.show(
    //   isBookmarked ? 'Bookmark removed' : 'Bookmark added',
    //   ToastAndroid.SHORT,
    // );
  };

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName: any;
          if (route.name === 'Feed') {
            iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'feature-search' : 'feature-search-outline';
          } else if (route.name === 'Bookmark') {
            iconName = focused ? 'bookmark-box' : 'bookmark-box-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }

          return TabIcon(iconName);
        },
        tabBarIconStyle: style.tabBarIconContainer,
        tabBarLabelStyle: style.tabBarLabel,
        tabBarActiveTintColor: '#7cb100',
        headerShown: false,
      })}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        initialParams={{toggleBookmark}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        initialParams={{toggleBookmark}}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        initialParams={{toggleBookmark, bookmarks}}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

function TabIcon(iconName) {
  return <Icon name={iconName} size={20} />;
  // return <Icon name="bookmar" />;
}

const style = StyleSheet.create({
  tabBarIconContainer: {
    width: 22,
    height: 22,
  },
  tabBarIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  tabBarLabel: {
    fontSize: 14,
  },
});

export default HomeTabNavigator;
