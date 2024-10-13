import { StyleSheet } from "react-native";
import React from "react";
import PurchasedCard from "../../../components/PurchasedCard";
import AnimatedList from "../../../components/AnimatedList";
import { useScrollYSection } from "../../../hooks/useScrollYSection";
import Reanimated from "react-native-reanimated";

type Props = {};

const PurchasedList = (props: Props) => {
  const { scrollY, scrollHandler } = useScrollYSection();
  return (
    <Reanimated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
        <AnimatedList scrollY={scrollY} key={index} item={index}>
          <PurchasedCard key={index} />
        </AnimatedList>
      ))}
    </Reanimated.ScrollView>
  );
};

export default PurchasedList;

const styles = StyleSheet.create({});
