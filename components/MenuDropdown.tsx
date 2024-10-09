import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { colorsGlobal } from "../utilities/colorsGlobal";
import { IDropdownItem } from "../utilities/Interfaces/IDropdownItem";

type Props = {
  items?: string;
  onSelect: (key: string) => void;
};

const MenuDropdown = (props: Props) => {
  const items: IDropdownItem[] = [
    { id: 1, title: "Remove from Wishlist", iconName: "document-text-outline" },
    { id: 2, title: "Share", iconName: "navigate-outline" },
    { id: 3, title: "About Ebook", iconName: "information-circle-outline" },
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6}>
        <Entypo
          name="dots-three-vertical"
          size={24}
          color={colorsGlobal.main}
        />
      </TouchableOpacity>
      <View style={styles.dropdownMenuContainer}>
        <View>
          {items.map(({ id, title, iconName }) => (
            <TouchableOpacity
              key={id}
              style={styles.item}
              activeOpacity={0.7}
              onPress={() => props.onSelect("41")}
            >
              <Ionicons name={iconName} size={24} color="black" />

              <Text style={styles.itemTitle}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default MenuDropdown;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  dropdownMenuContainer: {
    shadowColor: colorsGlobal.main,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    backgroundColor: colorsGlobal.white,
    position: "absolute",
    borderRadius: 20,
    width: 220,
    height: 150,
    top: 30,
    left: -200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});
