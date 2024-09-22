import {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

export const useScrollSection = () => {
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return { scrollX, scrollHandler };
};
