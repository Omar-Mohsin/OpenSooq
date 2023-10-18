import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import React from 'react'
import Profile from './Profile';
import CreatePost from './CreatePost';
import { SelectUser } from '../../redux/auth/authSlice';
import SignIn from './SignIn';
import { useSelector  , useDispatch} from 'react-redux';
const App = () => {

  enableScreens();

  const Tab = createBottomTabNavigator();
  const user  = useSelector(SelectUser)
  return (
    <NavigationContainer>


        {user?(

      <Tab.Navigator>
      <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} /> // Ensure the icon name is correct
              ),
            }}
          />
        <Tab.Screen
          name="createPost"
          component={CreatePost}
          options={{
            title: 'Create Post',
            tabBarLabel: 'Create Post',
            tabBarIcon: ({ color, size }) => (
              <Icon name="plus-square-o" color={color} size={size} />
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
      </Tab.Navigator>
      ) : 
          <View>
            <SignIn></SignIn>
          </View>
      }
    </NavigationContainer>



  )
}

export default App

const styles = StyleSheet.create({})