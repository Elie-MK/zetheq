import { Platform, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import { colorsGlobal } from "../../../utilities/colorsGlobal";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";
import MainContainer from "../MainContainer";

type Props = {};

const Home = (props: Props) => {
  return (
    <MainContainer>
      <View>
        <Header screen={HeaderEnums.HOME} />
      </View>
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsGlobal.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : undefined,
  },
  secondContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
});
