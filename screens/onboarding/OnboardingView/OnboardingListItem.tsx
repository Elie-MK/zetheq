import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  ViewToken,
  Animated,
} from "react-native";
import { useRef, useState } from "react";
import { IOnboardingDatas } from "../onboardingDatasInterface";
import OnboardingRenderItem from "./OnboardingItem";
import OnboardingDot from "./OnboardingDot";
import DatasOnboarding from "../onboardingDatas";
import OnboardingAnimation from "./OnboardingAnimation";

type Props = {
  datas: IOnboardingDatas[];
};

const OnboardingListItem = ({ datas }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<FlatList<IOnboardingDatas>>(null);

  const viewableItemsChanges = ({
    viewableItems,
  }: {
    viewableItems: ViewToken<IOnboardingDatas>[];
  }) => {
    setCurrentIndex(viewableItems[0].index!);
  };

  const slideTo = () => {
    if (currentIndex < datas.length - 1) {
      slideRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const slideSkip = () => {
    if (currentIndex < datas.length - 1) {
      slideRef.current?.scrollToIndex({
        index: currentIndex ? currentIndex + 1 : currentIndex + 2,
      });
    }
  };
  const isLastIndex = currentIndex === 2;

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          ref={slideRef}
          style={styles.list}
          data={datas}
          horizontal
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={viewableItemsChanges}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <OnboardingRenderItem datas={item} />}
        />
        <View style={styles.dotContainer}>
          <OnboardingDot datas={DatasOnboarding} scrollX={scrollX} />
        </View>

        <OnboardingAnimation
          slideSkip={slideSkip}
          slideTo={slideTo}
          isLastIndex={isLastIndex}
        />
      </ScrollView>
    </View>
  );
};

export default OnboardingListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginBottom: 50,
    marginTop: 50,
  },
});
