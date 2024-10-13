import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { colorsGlobal } from "../../../utilities/colorsGlobal";

type Props = {
  isLanguage?: boolean;
  isDarkMode?: boolean;
  Icon: React.ReactElement;
  title: string;
};

const SettingsItem = (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <View style={styles.leftIcon}>{props.Icon}</View>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View>
          {props.isLanguage ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.language}>English (US)</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={35}
                color={colorsGlobal.main}
              />
            </View>
          ) : (
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color={colorsGlobal.main}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
  },
  leftIcon: {
    padding: 10,
    backgroundColor: colorsGlobal.gray,
    borderRadius: 30,
  },
  language: {
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
});
