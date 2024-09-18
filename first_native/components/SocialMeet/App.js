import { NavigationContainer } from "@react-navigation/native";
import SocialHomeStackNavigator from "./Navigation";

export default function App() {
  return (
    <NavigationContainer>
        <SocialHomeStackNavigator />
    </NavigationContainer>
  )
}