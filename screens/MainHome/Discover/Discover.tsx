import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";
import MainContainer from "../MainContainer";

type Props = {};

const Discover = (props: Props) => {
  return (
    <MainContainer>
      <View>
        <Header screen={HeaderEnums.DISCOVERY} />
      </View>
    </MainContainer>
  );
};

export default Discover;

const styles = StyleSheet.create({});
