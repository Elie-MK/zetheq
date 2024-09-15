import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export const loadFonts = async (): Promise<void> => {
  await Font.loadAsync({
    "Roboto-Black": require("../assets/fonts/RobotoBlack.ttf"),
    "Roboto-Bold": require("../assets/fonts/RobotoBold.ttf"),
    "Roboto-Light": require("../assets/fonts/RobotoLight.ttf"),
    "Roboto-Medium": require("../assets/fonts/RobotoMedium.ttf"),
    "Roboto-Regular": require("../assets/fonts/RobotoRegular.ttf"),
    "Roboto-Thin": require("../assets/fonts/RobotoThin.ttf"),
  });
  SplashScreen.preventAutoHideAsync();
};
