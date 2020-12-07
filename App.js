import React from 'react'
import { View,Text} from 'react-native'
import HomeScreen from './src/homeScreen'
import AboutScreen from './src/About'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
export default () =>{
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          activeBackgroundColor:'#e3927f',
          inactiveBackgroundColor:'#41689b',
          inactiveTintColor: 'white',
          showLabel:false,
        }}>
        <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          tabBarLabel:'Home',
          tabBarIcon:({focused})=>(
             focused?<Icon name='home-sharp' size={25} color={'#fff'} />:<Icon name='home-outline' size={25} color={'#fff'} />
          )
        }}
        />
        <Tab.Screen 
        name='About' 
        component={AboutScreen}
        options={{
          tabBarLabel:'About',
          tabBarIcon:({focused})=>(
             focused?<Icon name='person' size={25} color={'#fff'} />:<Icon name='person-outline' size={25} color={'#fff'} />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
