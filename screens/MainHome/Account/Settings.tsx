import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SettingsItem from "./SettingsItem";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { colorsGlobal } from "../../../utilities/colorsGlobal";

type Props = {};

const Settings = (props: Props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SettingsItem
        Icon={<Entypo name="wallet" size={25} color={colorsGlobal.main} />}
        title="Payment Methods"
      />
      <SettingsItem
        Icon={<Feather name="user" size={25} color="black" />}
        title="Personal Info"
      />
      <SettingsItem
        Icon={<FontAwesome name="bell" size={25} color="black" />}
        title="Notification"
      />
      <SettingsItem
        Icon={<Ionicons name="settings" size={25} color="black" />}
        title="Preferences"
      />
      <SettingsItem
        Icon={
          <MaterialCommunityIcons name="shield-check" size={25} color="black" />
        }
        title="Security"
      />
      <SettingsItem
        Icon={<MaterialIcons name="language" size={25} color="black" />}
        title="Language"
        isLanguage
      />
      <SettingsItem
        Icon={<AntDesign name="eye" size={25} color="black" />}
        title="Dark Mode"
        isDarkMode
      />
      <SettingsItem
        Icon={<Feather name="file-minus" size={25} color="black" />}
        title="Help Center"
        isDarkMode
      />
      <SettingsItem
        Icon={<AntDesign name="infocirlce" size={25} color="black" />}
        title="About Zetheq"
        isDarkMode
      />
      <TouchableOpacity activeOpacity={0.7} style={styles.logOutContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <View style={styles.logOutIcon}>
            <Feather name="log-out" size={25} color="red" />
          </View>
          <Text style={styles.title}>Logout</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  logOutContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  logOutIcon: {
    padding: 10,
    backgroundColor: "#FFEBEB",
    borderRadius: 30,
  },
  title: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    color: "red",
  },
});
