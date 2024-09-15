import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5, Octicons } from "@expo/vector-icons";

import AuthGlobalContext from "../AuthGlobalContext";
import Input from "../../../components/UI/Input";
import { colorsGlobal } from "../../../utilities/colorsGlobal";
import Button from "../../../components/UI/Button";
import SocialMedia from "../../../components/SocialMedia";
import { useAppNavigation } from "../../../navigations/useAppNavigation";
import { handleHaptics } from "../../../config/Haptics";

type Props = {};

const SignupItem = (props: Props) => {
  const [seePswd, setSeePswd] = useState<boolean>(false);

  const width = useWindowDimensions().width;
  const navigation = useAppNavigation();

  const handleSeePswd = () => {
    setSeePswd((prevState) => !prevState);
  };
  const handleNavigationTo = () => {
    navigation.navigate("ForgotPassword");
    handleHaptics();
  };
  return (
    <AuthGlobalContext
      isSignup={false}
      title="Welcome "
      desc="Create your first account"
    >
      <View style={{ marginTop: width < 380 ? 15 : 30 }}>
        <View>
          <Input
            leftIcon={
              <FontAwesome5
                name="user"
                size={20}
                color={colorsGlobal.secondGray}
              />
            }
            placeholder="Your name"
          />
          <Input
            leftIcon={
              <Octicons name="mail" size={20} color={colorsGlobal.secondGray} />
            }
            placeholder="Your mail"
            textContentType="emailAddress"
          />
          <Input
            leftIcon={
              <Octicons name="lock" size={20} color={colorsGlobal.secondGray} />
            }
            placeholder="Password"
            secureTextEntry={!seePswd}
            rightIcon={
              <TouchableOpacity onPress={handleSeePswd}>
                <FontAwesome5
                  name={seePswd ? "eye-slash" : "eye"}
                  size={20}
                  color={colorsGlobal.secondGray}
                />
              </TouchableOpacity>
            }
          />
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.forgotPasswordContainer}
            onPress={handleNavigationTo}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password? </Text>
          </TouchableOpacity>

          <View style={styles.signUpBtn}>
            <Button title="Sign Up" />
          </View>

          <View>
            <View style={styles.continueWithContainer}>
              <View
                style={[
                  styles.borderTop,
                  { width: width < 380 ? "22%" : "30%" },
                ]}
              />
              <Text>Or continue with </Text>
              <View
                style={[
                  styles.borderTop,
                  {
                    width: width < 380 ? "22%" : "30%",
                  },
                ]}
              />
            </View>
            <View>
              <View style={styles.socialMediasContainer}>
                <SocialMedia name="google" />
                <SocialMedia name="facebook" />
                <SocialMedia name="apple" />
              </View>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate("SignIn")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 20,
                    color: colorsGlobal.secondGray,
                  }}
                >
                  Already have an account?{" "}
                  <Text
                    style={{
                      color: colorsGlobal.main,
                      fontFamily: "Roboto-bold",
                    }}
                  >
                    Sign In
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </AuthGlobalContext>
  );
};

export default SignupItem;

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: colorsGlobal.secondGray,
    fontFamily: "Roboto-Bold",
    fontSize: 14,
  },
  signUpBtn: {
    marginTop: 20,
  },
  continueWithContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginTop: 10,
  },
  borderTop: {
    borderTopWidth: 1,
  },
  socialMediasContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
});
