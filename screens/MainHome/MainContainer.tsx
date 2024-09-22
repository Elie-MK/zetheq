import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colorsGlobal } from "../../utilities/colorsGlobal";

type Props = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsGlobal.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : undefined,
  },
  secondContainer: {
    flex: 1,
    marginLeft: 10,
  },
});
