import {
  Dimensions,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colorsGlobal } from "../../utilities/colorsGlobal";
import { handleHaptics } from "../../config/Haptics";
import { useAppNavigation } from "../../navigations/useAppNavigation";

type Props = {
  children: React.ReactNode;
  title: string;
  desc: string;
  isSignup: boolean;
};

const width = Dimensions.get("window").width;

const AuthGlobalContext = ({ children, title, desc, isSignup }: Props) => {
  const navigation = useAppNavigation();
  function handleGoBack() {
    navigation.goBack();
    handleHaptics();
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.header}>
          {!isSignup && (
            <View>
              <TouchableOpacity
                onPress={handleGoBack}
                activeOpacity={0.6}
                style={styles.back}
              >
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
          </View>
          <View>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AuthGlobalContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsGlobal.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: width < 380 ? 20 : 30,
    fontFamily: "Roboto-bold",
  },
  desc: {
    fontSize: width < 380 ? 14 : 16,
    marginTop: width < 380 ? 5 : 10,
    color: colorsGlobal.secondGray,
    fontFamily: "Roboto-light",
  },
  back: {
    marginBottom: width < 380 ? 10 : 20,
    backgroundColor: colorsGlobal.gray,
    flexDirection: "row",
    alignSelf: "flex-start",
    padding: 12,
    borderRadius: 50,
  },
});
