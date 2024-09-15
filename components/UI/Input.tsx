import {
  Dimensions,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { ReactNode } from "react";
import { colorsGlobal } from "../../utilities/colorsGlobal";

type Props = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & TextInputProps;

const width = Dimensions.get("window").width;

const Input = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        {props.leftIcon}
        <TextInput {...props} style={styles.input} />
      </View>
      {props.rightIcon}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: colorsGlobal.secondGray,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 15,
    marginBottom: width < 380 ? 7 : 15,
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 15,
    fontSize: 14,
    width: "90%",
  },
});
