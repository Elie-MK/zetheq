import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AuthGlobalContext from "../AuthGlobalContext";
import Input from "../../../components/UI/Input";
import { FontAwesome5, Octicons } from "@expo/vector-icons";
import { colorsGlobal } from "../../../utilities/colorsGlobal";
import Button from "../../../components/UI/Button";
import { useAppNavigation } from "../../../navigations/useAppNavigation";

type Props = {};

const NewPasswordItem = (props: Props) => {
  const [seePswd, setSeePswd] = useState<boolean>(false);
  const navigation = useAppNavigation();
  const handleSeePswd = () => {
    setSeePswd((prevState) => !prevState);
  };

  return (
    <AuthGlobalContext
      title="Enter New Password"
      desc="Your new  passwod musbe diferent from previously used password"
      isSignup={false}
    >
      <View style={{ marginTop: 20 }}>
        <Input
          leftIcon={
            <Octicons name="lock" size={20} color={colorsGlobal.secondGray} />
          }
          placeholder="New Password"
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
        <Input
          leftIcon={
            <Octicons name="lock" size={20} color={colorsGlobal.secondGray} />
          }
          placeholder="Confirm Password"
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
        <View style={{ marginTop: 20 }}>
          <Button title="Continue" />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Back to{" "}
            <Text
              style={{ color: colorsGlobal.main, fontFamily: "Roboto-bold" }}
            >
              Sign in
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </AuthGlobalContext>
  );
};

export default NewPasswordItem;

const styles = StyleSheet.create({});
