
import { NavigationContainer } from "@react-navigation/native";
import ScooterHomeStackNavigator from "./Navigation";

export default function App() {
  return (
    <NavigationContainer>
          <ScooterHomeStackNavigator />
    </NavigationContainer>
  )
}