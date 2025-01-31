import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {StyleSheet} from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import Icon from '@react-native-vector-icons/material-design-icons';
import BookmarksScreen from '../screens/BookmarksScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
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
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookmark" component={BookmarksScreen} />
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
