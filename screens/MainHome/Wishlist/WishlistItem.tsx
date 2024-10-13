import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import WishlistCard from "../../../components/WishlistCard";
import AnimatedList from "../../../components/AnimatedList";
import Reanimated from "react-native-reanimated";
import { useScrollYSection } from "../../../hooks/useScrollYSection";
type Props = {};

const WishlistItem = (props: Props) => {
  const { scrollY, scrollHandler } = useScrollYSection();
  return (
    <Reanimated.ScrollView
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      style={{ flex: 1 }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
        <AnimatedList scrollY={scrollY} key={index} item={index}>
          <WishlistCard />
        </AnimatedList>
      ))}
    </Reanimated.ScrollView>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({});
