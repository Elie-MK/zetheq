import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { loadFonts } from "./config/fonts";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./screens/onboarding/OnboardingView/Onboarding";
import { registerRootComponent } from "expo";
import AuthNavigation from "./navigations/AuthNavigation";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };
    fetchFonts();
  }, []);

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
