import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Favourite from '../screens/Favourite'
import Profile from '../screens/Profile'
import { Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/8.png")}
                            style={{ height:20, width:20 }}
                        />
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/9.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/10.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const PlantHomeStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="App" component={BottomTabNavigator}/>
                <Stack.Screen name="Detail" component={Detail}/>
           </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PlantHomeStackNavigator;