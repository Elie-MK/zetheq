import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colorsGlobal } from "../utilities/colorsGlobal";
import { IDropdownItem } from "../utilities/Interfaces/IDropdownItem";

type Props = {
  items: IDropdownItem[];
  onSelect: (key: string) => void;
};

const MenuDropdownItem = ({ items, onSelect }: Props) => {
  const width = Dimensions.get("window").width;

  return (
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
              onPress={() => onSelect("")}
            >
              <Ionicons name={iconName} size={24} color="black" />

              <Text
                style={[styles.itemTitle, { fontSize: width < 380 ? 12 : 16 }]}
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
  );
};

export default MenuDropdownItem;

const styles = StyleSheet.create({
  dropdownMenuContainer: {
    shadowColor: colorsGlobal.main,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    backgroundColor: colorsGlobal.white,
    position: "absolute",
    borderRadius: 20,
    zIndex: 2,
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
