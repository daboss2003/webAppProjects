import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
}

const FoodDeliveryHomeStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Detail" component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}
export default FoodDeliveryHomeStackNavigator;