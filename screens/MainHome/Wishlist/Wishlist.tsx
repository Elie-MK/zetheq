import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "../MainContainer";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";
import WishlistItem from "./WishlistItem";

type Props = {};

const Wishlist = (props: Props) => {
  return (
    <MainContainer>
      <View style={{ flex: 1 }}>
        <Header screen={HeaderEnums.WISHLIST} />
        <WishlistItem />
      </View>
    </MainContainer>
  );
};

export default Wishlist;

const styles = StyleSheet.create({});
