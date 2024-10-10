import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "../MainContainer";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";
import PurchasedList from "./PurchasedList";

type Props = {};

const Purchased = (props: Props) => {
  return (
    <MainContainer>
      <View style={{ flex: 1 }}>
        <Header screen={HeaderEnums.PURCHASED} />
        <PurchasedList />
      </View>
    </MainContainer>
  );
};

export default Purchased;

const styles = StyleSheet.create({});
