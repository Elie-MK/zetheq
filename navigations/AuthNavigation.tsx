import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/Auth/signin/SignIn";
import SignUp from "../screens/Auth/signup/SignUp";
import ForgotPassword from "../screens/Auth/ForgotPassword/ForgotPassword";
import NewPassword from "../screens/Auth/NewPassword/NewPassword";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
