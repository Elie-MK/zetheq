import { StyleSheet, View } from "react-native";
import React from "react";

import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";
import MainContainer from "../MainContainer";
import AllSections from "./AllSections";

type Props = {};

const Home = (props: Props) => {
  return (
    <MainContainer>
      <View style={{ flex: 1 }}>
        <Header screen={HeaderEnums.HOME} />
        <AllSections />
      </View>
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
