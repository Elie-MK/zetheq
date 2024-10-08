import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";
import MainContainer from "../MainContainer";
import DiscoveryAllSection from "./DiscoveryAllSection";

type Props = {};

const Discover = (props: Props) => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <Header screen={HeaderEnums.DISCOVERY} />
        <DiscoveryAllSection />
      </View>
    </MainContainer>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
