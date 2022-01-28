import React, { Component } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreens from '../screens/HomeScreen'
import SearchScreens from '../screens/SearchScreen'
import NotificationScreens from '../screens/NotificationScreen';
import ProfileScreens from '../screens/ProfileScreen'

const MenuStack = createNativeStackNavigator();

class HomeNavigator extends Component {
    render() {
        return (
          <MenuStack.Navigator>
            <MenuStack.Screen name="HomeScreen" component={HomeScreens.HomeScreen}
              options={{
                title: ' ',
                headerShown: false,
                tabBarShowLabel:false
              }}/>
            <MenuStack.Screen name="HomeDetailScreen" component={HomeScreens.HomeDetailsScreen}
              options={{
                title: ' ',
              }}/>
          </MenuStack.Navigator>
        );
    }
}

class SearchNavigator extends Component {
  render() {
    return (
      <MenuStack.Navigator>
        <MenuStack.Screen name="SearchScreen" component={SearchScreens.SearchScreen}
          options={{
              title: ' ',
              headerShown: false,
              tabBarShowLabel:false
          }}/>
        <MenuStack.Screen name="SearchDetailScreen" component={SearchScreens.SearchDetailsScreen} 
          options={{
            title: 'AWB'
          }}/>
      </MenuStack.Navigator>
    );
  }
}

class NotificationNavigator extends Component {
  render () {
    return (
      <MenuStack.Navigator>
        <MenuStack.Screen name="NotificationScreen" component={NotificationScreens.NotificationScreen} 
          options={{
            title: ' ',
            headerShown: false,
            tabBarShowLabel:false
          }}/>
        <MenuStack.Screen name="NotificationDetailScreen" component={NotificationScreens.NotificationDetailScreen}
          options={{
            title: ' ',
            headerShown: false,
            tabBarShowLabel:false
          }}/>
      </MenuStack.Navigator>
    );
  }
}

class ProfileNavigator extends Component {
  render () {
    return (
      <MenuStack.Navigator>
        <MenuStack.Screen name="ProfileScreen" component={ProfileScreens.ProfileScreen} 
          options={{
            title: ' ',
            headerShown: false,
            tabBarShowLabel:false
          }}/>
        <MenuStack.Screen name="ProfileDetailScreen" component={ProfileScreens.ProfileDetailScreen}
          options={{
            title: ' ',
            headerShown: false,
            tabBarShowLabel:false
          }}/>
      </MenuStack.Navigator>
    );
  }
}

export default {
  HomeNavigator,
  SearchNavigator,
  NotificationNavigator,
  ProfileNavigator
}
