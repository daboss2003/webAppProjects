import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../components/Reviews/About'

function AboutStack() {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="About-Screen">
        <Stack.Screen
        name="About-Screen"
        component={About}
        options={{
            headerShown: false
        }}
        />
    </Stack.Navigator>
  )
}
 
export default AboutStack