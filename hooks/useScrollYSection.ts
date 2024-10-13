import {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

export const useScrollYSection = () => {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return { scrollY, scrollHandler };
};
