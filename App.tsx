import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { loadFonts } from "./config/fonts";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./screens/onboarding/OnboardingView/Onboarding";
import AuthNavigation from "./navigations/AuthNavigation";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };
    fetchFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Onboarding"
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
