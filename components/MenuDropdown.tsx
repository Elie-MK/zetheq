import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { colorsGlobal } from "../utilities/colorsGlobal";
import { BookState } from "../utilities/Enums/BookState.enums";
import { IDropdownItem } from "../utilities/Interfaces/IDropdownItem";
import MenuDropdownItem from "./MenuDropdownItem";

type Props = {
  isDropdownOpen?: boolean;
  items?: string;
  onSelect: (key: string) => void;
  handleOpenDropdown: () => void;
  state: BookState;
  children: React.ReactNode;
};

const MenuDropdown = ({ children, ...props }: Props) => {
  const NotPurchased: IDropdownItem[] = [
    { id: 1, title: "Remove from Wishlist", iconName: "trash-outline" },
    { id: 2, title: "Share", iconName: "navigate-outline", isBorder: true },
    { id: 3, title: "About Ebook", iconName: "information-circle-outline" },
  ];
  const Purchased: IDropdownItem[] = [
    { id: 1, title: "Remove Download", iconName: "trash-outline" },
    {
      id: 2,
      title: "Mark as Finished",
      iconName: "checkbox-outline",
      isBorder: true,
    },
    { id: 3, title: "About Ebook", iconName: "information-circle-outline" },
  ];
  return (
    <View>
      <TouchableOpacity onPress={props.handleOpenDropdown} activeOpacity={0.6}>
        {children}
      </TouchableOpacity>
      {props.isDropdownOpen && props.state === BookState.NOT_PURCHASED && (
        <MenuDropdownItem
          items={NotPurchased}
          onSelect={() => props.onSelect("")}
        />
      )}
      {props.isDropdownOpen && props.state === BookState.PURCHASED && (
        <MenuDropdownItem
          items={Purchased}
          onSelect={() => props.onSelect("")}
        />
      )}
    </View>
  );
};

export default MenuDropdown;

const styles = StyleSheet.create({});
