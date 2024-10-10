import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { colorsGlobal } from "../utilities/colorsGlobal";
import { IDropdownItem } from "../utilities/Interfaces/IDropdownItem";

type Props = {
  isDropdownOpen?: boolean;
  items?: string;
  onSelect: (key: string) => void;
  handleOpenDropdown: () => void;
};

const MenuDropdown = (props: Props) => {
  const items: IDropdownItem[] = [
    { id: 1, title: "Remove from Wishlist", iconName: "document-text-outline" },
    { id: 2, title: "Share", iconName: "navigate-outline", isBorder: true },
    { id: 3, title: "About Ebook", iconName: "information-circle-outline" },
  ];
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.handleOpenDropdown} activeOpacity={0.6}>
        <Entypo
          name="dots-three-vertical"
          size={24}
          color={colorsGlobal.main}
        />
      </TouchableOpacity>
      {props.isDropdownOpen && (
        <View
          style={[
            styles.dropdownMenuContainer,
            {
              top: width < 380 ? -40 : -60,
            },
          ]}
        >
          <View>
            {items.map(({ id, title, iconName, isBorder }) => (
              <View key={id}>
                {isBorder && (
                  <View
                    style={{
                      borderColor: colorsGlobal.gray,
                      borderTopWidth: 1,
                    }}
                  />
                )}
                <TouchableOpacity
                  key={id}
                  style={[styles.item, { padding: width < 380 ? 7 : 10 }]}
                  activeOpacity={0.7}
                  onPress={() => props.onSelect("41")}
                >
                  <Ionicons name={iconName} size={24} color="black" />

                  <Text
                    style={[
                      styles.itemTitle,
                      { fontSize: width < 380 ? 12 : 16 },
                    ]}
                  >
                    {title}
                  </Text>
                </TouchableOpacity>
                {isBorder && (
                  <View
                    style={{
                      borderColor: colorsGlobal.gray,
                      borderBottomWidth: 1,
                    }}
                  />
                )}
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default MenuDropdown;

const styles = StyleSheet.create({
  container: {
    // position: "relative",
  },
  dropdownMenuContainer: {
    shadowColor: colorsGlobal.main,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    backgroundColor: colorsGlobal.white,
    position: "absolute",
    borderRadius: 20,
    width: 220,

    left: -220,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  itemTitle: {
    fontWeight: "500",
  },
});
