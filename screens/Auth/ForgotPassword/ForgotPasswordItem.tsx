import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AuthGlobalContext from "../AuthGlobalContext";
import Input from "../../../components/UI/Input";
import { Octicons } from "@expo/vector-icons";
import { colorsGlobal } from "../../../utilities/colorsGlobal";
import Button from "../../../components/UI/Button";
import { useAppNavigation } from "../../../navigations/useAppNavigation";

type Props = {};

const ForgotPasswordItem = (props: Props) => {
  const navigation = useAppNavigation();
  return (
    <AuthGlobalContext
      isSignup={false}
      title="Forgot Password"
      desc="Enter the email associated with your account and we'll send and email to reset your password."
    >
      <View style={styles.container}>
        <Input
          leftIcon={
            <Octicons name="mail" size={20} color={colorsGlobal.secondGray} />
          }
          placeholder="Your mail"
          textContentType="emailAddress"
        />
        <View style={styles.btnContainer}>
          <Button title="Send Mail" />
        </View>

        <TouchableOpacity>
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Back to{" "}
            <Text
              style={{ color: colorsGlobal.main, fontFamily: "Roboto-bold" }}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign in
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </AuthGlobalContext>
  );
};

export default ForgotPasswordItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  btnContainer: {
    marginTop: 20,
  },
});
