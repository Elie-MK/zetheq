import {
  Animated,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { colorsGlobal } from "../../../utilities/colorsGlobal";
import { IOnboardingDatas } from "../onboardingDatasInterface";

type Props = {
  datas: IOnboardingDatas[];
  scrollX: Animated.Value;
};

const OnboardingDot = ({ datas, scrollX }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {datas.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [15, 35, 15],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={i}
            style={[styles.dot, { width: dotWidth, opacity }]}
          />
        );
      })}
    </View>
  );
};

export default OnboardingDot;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colorsGlobal.main,
  },
});
