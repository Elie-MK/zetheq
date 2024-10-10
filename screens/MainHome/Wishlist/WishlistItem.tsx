import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import WishlistCard from "../../../components/WishlistCard";

type Props = {};

const WishlistItem = (props: Props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <WishlistCard />
      <WishlistCard />
      <WishlistCard />
    </ScrollView>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({});
