import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PurchasedCard from "../../../components/PurchasedCard";

type Props = {};

const PurchasedList = (props: Props) => {
  return (
    <ScrollView>
      {[1, 2, 3, 4].map((index) => (
        <PurchasedCard key={index} />
      ))}
    </ScrollView>
  );
};

export default PurchasedList;

const styles = StyleSheet.create({});
