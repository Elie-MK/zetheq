import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useScrollSection } from "../../../hooks/useScrollSection";
import ListSection from "../../../components/ListSection";
import AnimatedCard from "../../../components/AnimatedCard";
import BookCard from "../../../components/BookCard";

type Props = {};

const DiscoveryAllSection = (props: Props) => {
  const { scrollX: scrollXSectionA, scrollHandler: scrollHandlerA } =
    useScrollSection();
  const { scrollX: scrollXSectionB, scrollHandler: scrollHandlerB } =
    useScrollSection();
  const { scrollX: scrollXSectionC, scrollHandler: scrollHandlerC } =
    useScrollSection();
  const { scrollX: scrollXSectionD, scrollHandler: scrollHandlerD } =
    useScrollSection();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.bodyContainer}>
        <ListSection
          onScroll={scrollHandlerA}
          scrollEventThrottle={16}
          title="Top Charts"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <AnimatedCard scrollX={scrollXSectionA} item={item} key={item}>
              <BookCard />
            </AnimatedCard>
          ))}
        </ListSection>
        <ListSection
          onScroll={scrollHandlerB}
          scrollEventThrottle={16}
          title="Top Selling"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <AnimatedCard scrollX={scrollXSectionB} item={item} key={item}>
              <BookCard />
            </AnimatedCard>
          ))}
        </ListSection>
        <ListSection
          onScroll={scrollHandlerC}
          scrollEventThrottle={16}
          title="Top Free"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <AnimatedCard scrollX={scrollXSectionC} item={item} key={item}>
              <BookCard />
            </AnimatedCard>
          ))}
        </ListSection>
        <ListSection
          onScroll={scrollHandlerD}
          scrollEventThrottle={16}
          title="Top New Releases"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <AnimatedCard scrollX={scrollXSectionD} item={item} key={item}>
              <BookCard />
            </AnimatedCard>
          ))}
        </ListSection>
      </View>
    </ScrollView>
  );
};

export default DiscoveryAllSection;

const styles = StyleSheet.create({
  bodyContainer: {
    marginTop: 10,
  },
});
