import React from 'react'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import Header from '../components/Reviews/Header';


function Nav() {
    const Drawer = createDrawerNavigator();
    
    return (
       <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            >
                <Drawer.Screen name='Home'
                    component={HomeStack}
                    options={
                        ({ route }) => ({ headerTitle: () => <Header title={'GameZone'} />, headerShown: (getFocusedRouteNameFromRoute(route) ?? 'Home').split('-')[0] === route.name  })
                    }
                />
                <Drawer.Screen name='About'
                    component={AboutStack}
                    options={
                        ({ route }) => ({ headerTitle: () => <Header title={'About GameZone'} />, headerShown: (getFocusedRouteNameFromRoute(route) ?? 'About').split('-')[0] === route.name  })
                    } />
            </Drawer.Navigator> 
       </NavigationContainer>
  )
}

export default Nav

