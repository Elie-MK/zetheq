import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import AnimatedCard from "../../../components/AnimatedCard";
import BookCard from "../../../components/BookCard";
import ListSection from "../../../components/ListSection";
import BookGenreCard from "../../../components/BookGenreCard";
import { useScrollSection } from "../../../hooks/useScrollSection";

type Props = {};

const AllSections = (props: Props) => {
  const { scrollX: scrollXSectionA, scrollHandler: scrollHandlerA } =
    useScrollSection();
  const { scrollX: scrollXSectionB, scrollHandler: scrollHandlerB } =
    useScrollSection();
  const { scrollX: scrollXSectionC, scrollHandler: scrollHandlerC } =
    useScrollSection();
  const { scrollX: scrollXSectionD, scrollHandler: scrollHandlerD } =
    useScrollSection();
  const { scrollX: scrollXSectionE, scrollHandler: scrollHandlerE } =
    useScrollSection();

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.bodyContainer}>
        <ListSection
          onScroll={scrollHandlerA}
          scrollEventThrottle={16}
          isHideArrow={true}
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
          title="Explore by Genre"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <AnimatedCard scrollX={scrollXSectionB} item={item} key={item}>
              <BookGenreCard />
            </AnimatedCard>
          ))}
        </ListSection>
        <ListSection
          onScroll={scrollHandlerC}
          scrollEventThrottle={16}
          title="Recomended For You"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <AnimatedCard scrollX={scrollXSectionC} item={item} key={item}>
              <BookCard />
            </AnimatedCard>
          ))}
        </ListSection>
        <ListSection onScroll={scrollHandlerD} title="On Your Purchased">
          {[1, 2, 3, 4, 5].map((item) => (
            <AnimatedCard scrollX={scrollXSectionD} item={item} key={item}>
              <BookCard purchased />
            </AnimatedCard>
          ))}
        </ListSection>
        <ListSection onScroll={scrollHandlerE} title="On your Wishlist">
          {[1, 2, 3, 4, 5].map((item) => (
            <AnimatedCard scrollX={scrollXSectionE} item={item} key={item}>
              <BookCard />
            </AnimatedCard>
          ))}
        </ListSection>
      </View>
    </ScrollView>
  );
};

export default AllSections;

const styles = StyleSheet.create({
  bodyContainer: {
    marginTop: 10,
  },
});
