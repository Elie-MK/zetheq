import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "../MainContainer";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";

type Props = {};

const Wishlist = (props: Props) => {
  return (
    <MainContainer>
      <View>
        <Header screen={HeaderEnums.WISHLIST} />
      </View>
    </MainContainer>
  );
};

export default Wishlist;

const styles = StyleSheet.create({});
