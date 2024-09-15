import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  name: string;
} & TouchableOpacityProps;

const SocialMedia = ({ name, ...props }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome5 {...props} name={name} size={25} />
      </View>
    </TouchableOpacity>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 50,
    padding: 10,
    borderRadius: 50,
  },
  icon: {
    alignSelf: "center",
    justifyContent: "center",
  },
});
