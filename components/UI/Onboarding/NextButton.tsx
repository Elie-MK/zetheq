import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { colorsGlobal } from "../../../utilities/colorsGlobal";

type Props = {
  title: string;
  onPress: () => void;
} & TouchableOpacityProps;

const NextButton = ({ title, onPress, ...props }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...props}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorsGlobal.main,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    color: colorsGlobal.white,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
  },
});
