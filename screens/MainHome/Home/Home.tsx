import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderHome from "./HeaderHome";
import { colorsGlobal } from "../../../utilities/colorsGlobal";

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <HeaderHome />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsGlobal.white,
  },
  secondContainer: {
    marginHorizontal: 20,
  },
});
