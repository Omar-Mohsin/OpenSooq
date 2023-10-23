import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Profile from './Profile';
import CreatePost from './CreatePost';
import { SelectUser } from '../../redux/auth/authSlice';
import SignIn from './SignIn';
import { useSelector } from 'react-redux';
import SearchStack from './SearchStack';
const App = () => {
  const Tab = createBottomTabNavigator();
  const user = useSelector(SelectUser);

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="CreatePost"
            component={CreatePost}
            options={{
              title: 'Create Post',
              tabBarLabel: 'Create Post',
              tabBarIcon: ({ color, size }) => (
                <Icon name="edit" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              title: 'Profile',
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Icon name="user" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="SearchStack"
            component={SearchStack}
            options={{
              title: 'Search',
              tabBarLabel: 'Search',
              headerShown: false,

              tabBarIcon: ({ color, size }) => (
                <Icon name="search" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <SignIn />
      )}
    </NavigationContainer>
  );
}

export default App;
