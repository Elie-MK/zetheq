import { StyleSheet } from "react-native";
import React from "react";
import Reanimated, {
  FadeInDown,
  LinearTransition,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
type Props = {
  children: React.ReactNode;
  item: number;
  scrollY: SharedValue<number>;
};

const AnimatedList = ({ item, children, scrollY }: Props) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(scrollY.value < 150 * item ? 1 : 0.8, {
            duration: 500,
          }),
        },
      ],
      opacity: withTiming(scrollY.value < 150 * item ? 1 : 0.5, {
        duration: 500,
      }),
    };
  });

  return (
    <Reanimated.View style={animatedStyle}>
      <Reanimated.View
        entering={FadeInDown.delay(item * 300)}
        layout={LinearTransition.springify()}
      >
        {children}
      </Reanimated.View>
    </Reanimated.View>
  );
};

export default AnimatedList;

const styles = StyleSheet.create({});
