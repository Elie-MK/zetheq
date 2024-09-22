import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/build/Feather";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderEnums } from "../utilities/Enums/header/Header.enums";

type Props = {
  screen: HeaderEnums;
};

const Header = ({ screen }: Props) => {
  const dimension = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Image source={require("../assets/icon.png")} style={styles.image} />
        <Text
          style={{
            fontSize: dimension < 380 ? 18 : 24,
            fontFamily: "Roboto-bold",
          }}
        >
          {screen}
        </Text>
      </View>
      <View style={styles.iconsSection}>
        {screen !== HeaderEnums.ACCOUNT && (
          <TouchableOpacity>
            <Feather
              name="search"
              size={dimension < 380 ? 24 : 30}
              color="black"
            />
          </TouchableOpacity>
        )}
        {screen === HeaderEnums.HOME && (
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="bell-outline"
              size={dimension < 380 ? 24 : 30}
              color="black"
            />
          </TouchableOpacity>
        )}
        {(screen === HeaderEnums.WISHLIST ||
          screen === HeaderEnums.PURCHASED) && (
          <TouchableOpacity>
            <Ionicons
              name="filter-circle-outline"
              size={dimension < 380 ? 24 : 30}
              color="black"
            />
          </TouchableOpacity>
        )}
        {screen === HeaderEnums.ACCOUNT && (
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-horizontal-circle-outline"
              size={dimension < 380 ? 24 : 30}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
});
