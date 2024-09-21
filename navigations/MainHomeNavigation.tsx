import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/MainHome/Home/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colorsGlobal } from "../utilities/colorsGlobal";
import Discover from "../screens/MainHome/Discover/Discover";
import { IconName } from "./types/navigation-icons.type";
import Wishlist from "../screens/MainHome/Wishlist/Wishlist";
import Purchased from "../screens/MainHome/Purchased/Purchased";
import Account from "../screens/MainHome/Account/Account";

const MainHomeNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Discover") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "Wishlist") {
            iconName = focused ? "file-document" : "file-document-outline";
          } else if (route.name === "Purchased") {
            iconName = focused ? "cart" : "cart-outline";
          } else {
            iconName = focused ? "account" : "account-outline";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: colorsGlobal.main,
        tabBarInactiveTintColor: colorsGlobal.secondGray,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Purchased" component={Purchased} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default MainHomeNavigation;
