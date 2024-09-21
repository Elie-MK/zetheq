import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "../MainContainer";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";

type Props = {};

const Purchased = (props: Props) => {
  return (
    <MainContainer>
      <View>
        <Header screen={HeaderEnums.PURCHASED} />
      </View>
    </MainContainer>
  );
};

export default Purchased;

const styles = StyleSheet.create({});
