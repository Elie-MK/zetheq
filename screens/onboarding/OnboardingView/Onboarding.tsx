import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import OnboardingItem from "./OnboardingListItem";
import DatasOnboarding from "../onboardingDatas";
import { colorsGlobal } from "../../../utilities/colorsGlobal";

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OnboardingItem datas={DatasOnboarding} />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsGlobal.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
