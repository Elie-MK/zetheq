import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import Reanimated, {
  FadeInLeft,
  LinearTransition,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type Props = {
  children: React.ReactNode;
  item: number;
  scrollX: SharedValue<number>;
};

const AnimatedCard = ({ item, children, scrollX }: Props) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(scrollX.value > 150 * item ? 0.9 : 1, {
            duration: 500,
          }),
        },
      ],
      opacity: withTiming(scrollX?.value < 150 * item ? 1 : 0.5, {
        duration: 500,
      }),
    };
  });
  return (
    <Reanimated.View style={animatedStyle}>
      <Reanimated.View
        entering={FadeInLeft.delay(item * 300)}
        layout={LinearTransition.springify()}
      >
        {children}
      </Reanimated.View>
    </Reanimated.View>
  );
};

export default AnimatedCard;

const styles = StyleSheet.create({});
