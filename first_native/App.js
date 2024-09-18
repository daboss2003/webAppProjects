import 'react-native-gesture-handler';
import { StyleSheet, View} from "react-native";
import Example from "./components/example";
import { StatusBar, Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "./components/Todo/Header";
import TodoList from "./components/Todo/TodoList";
import * as Font from 'expo-font'
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import Nav from './routes/Nav';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold
} from "@expo-google-fonts/montserrat";
import ChatStackNavigator from './components/DatingUI/navigations/Navigator';
import CleanWalkApp from './components/CleanWalk/CleanWalk';
import CovidHomeStackNavigator from './components/Covid_19App/navigations/Navigator';
import FoodDeliveryHomeStackNavigator from './components/FoodDeliveryUI/navigations/Navigator';
import HackerTonHomeStackNavigator from './components/HackerTonV12/navigations/Navigator';
import OnboardingUI from './components/OnboardingIntro/App';
import PickerStalkUI from './components/PickStackUI/navigations/Navigator';
import PlantHomeStackNavigator from './components/PlantUI/navigations/Navigator';
import TravelUI from './components/TravelUI/App';
import SocialHomeStackNavigator from './components/SocialMeet/App';
import ScooterHomeStackNavigator from './components/Scooter/App';





SplashScreen.preventAutoHideAsync();


const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Bold':require('./assets/fonts/Montserrat-ExtraBold.otf'),
    'Medium':require('./assets/fonts/Montserrat-Medium.otf'),
    'Regular': require('./assets/fonts/Montserrat-Regular.otf'),
    'RobotoBold' : require('./assets/fonts/Roboto-Bold.ttf'),
    'RobotoRegular' : require('./assets/fonts/Roboto-Regular.ttf'),
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const [loaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold
  });

   useEffect(() => {
    async function prepare() {
      try {
        await getFonts()
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded && loaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded, loaded]);


  function handlekeybord() {
    Keyboard.dismiss()
  }

  if (!fontLoaded) {
    return null;
  }

  return (
      <>
     
       <TouchableWithoutFeedback onPress={handlekeybord}>
         <View onLayout={onLayoutRootView} style={styles.container}>
          <StatusBar style="auto" />
          {/* <Example /> */}
          {/* <Header />
          <TodoList /> */}
           {/* <Nav /> */}
         </View>
      </TouchableWithoutFeedback>
      {/* <ScooterHomeStackNavigator /> */}
      {/* <SocialHomeStackNavigator /> */}
      {/* <CleanWalkApp /> */}
      {/* <ChatStackNavigator /> */}
      {/* <HackerTonHomeStackNavigator /> */}
      {/* <CovidHomeStackNavigator /> */}
      {/* <FoodDeliveryHomeStackNavigator /> */}
      {/* <PlantHomeStackNavigator /> */}
      {/* <OnboardingUI /> */}
      {/* <TravelUI /> */}
       {/* <PickerStalkUI /> */}
      
       </>
    );
} 
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
  



