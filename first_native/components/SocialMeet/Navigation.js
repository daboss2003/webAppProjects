import {createStackNavigator} from '@react-navigation/stack';
import Profile from './Profile';
import Detail from './Details';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const SocialHomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name = "Profile"
                component={Profile}
            />
             <Stack.Screen
                name = "ProfileDetail"
                component={Detail}
            />
        </Stack.Navigator>
    )
}

export default SocialHomeStackNavigator;