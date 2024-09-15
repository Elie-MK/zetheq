import { StyleSheet, Text, View } from "react-native";
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import SkipButton from "../../../components/UI/Onboarding/SkipButton";
import NextButton from "../../../components/UI/Onboarding/NextButton";
import Button from "../../../components/UI/Button";
import { useAppNavigation } from "../../../navigations/useAppNavigation";

type Props = {
  isLastIndex: boolean;
  slideTo: () => void;
  slideSkip: () => void;
};

const OnboardingAnimation = ({ isLastIndex, slideSkip, slideTo }: Props) => {
  const navigation = useAppNavigation();
  /**
   * Animation section
   */
  const opacity1 = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  if (isLastIndex) {
    opacity1.value = withDelay(0 * 500, withTiming(0, { duration: 1000 }));
    translateY.value = withTiming(50, { duration: 1000 });
  } else {
    opacity1.value = withDelay(0 * 500, withTiming(1, { duration: 3000 }));
    translateY.value = withTiming(0, { duration: 1000 });
  }
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <>
      <Reanimated.View style={[animatedStyle]}>
        {isLastIndex ? (
          <Button
            onPress={() => navigation.replace("AuthNavigation")}
            title="Get Started"
          />
        ) : (
          <NextButton onPress={slideTo} title="Next" />
        )}
      </Reanimated.View>
      <Reanimated.View style={[animatedStyle, { opacity: opacity1 }]}>
        <SkipButton onPress={slideSkip} title="Skip" />
      </Reanimated.View>
    </>
  );
};

export default OnboardingAnimation;

const styles = StyleSheet.create({});
