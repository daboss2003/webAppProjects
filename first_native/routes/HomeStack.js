import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Reviews/Home'
import ReviewDetails from '../components/Reviews/ReviewDetails'

function HomeStack() {
    const Stack = createNativeStackNavigator()
  return (
     <Stack.Navigator initialRouteName="Home-Screen">
        <Stack.Screen
        name="Home-Screen"
        component={Home}
        options={{
            headerShown: false
           
        }}
        />
        <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
            title: 'Review Details',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            
        }}
        />
    </Stack.Navigator>
            
  )
}

export default HomeStack