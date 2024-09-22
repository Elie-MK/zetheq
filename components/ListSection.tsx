import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colorsGlobal } from "../utilities/colorsGlobal";
import Animated from "react-native-reanimated";

type Props = {
  children: React.ReactNode;
  title?: string;
  isHideArrow?: boolean;
} & ScrollViewProps;

const ListSection = ({ children, title, isHideArrow, ...props }: Props) => {
  const width = Dimensions.get("window").width;

  return (
    <View style={{ marginTop: isHideArrow ? 0 : 20 }}>
      <View style={styles.titleSection}>
        <Text style={[styles.title, { fontSize: width < 380 ? 18 : 25 }]}>
          {title}
        </Text>
        {!isHideArrow && (
          <TouchableOpacity activeOpacity={0.5}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={width < 380 ? 24 : 30}
              color={colorsGlobal.main}
            />
          </TouchableOpacity>
        )}
      </View>
      <Animated.ScrollView
        style={{ marginTop: isHideArrow ? 0 : 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        {...props}
      >
        {children}
      </Animated.ScrollView>
    </View>
  );
};

export default ListSection;

const styles = StyleSheet.create({
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
  },
  title: {
    color: colorsGlobal.main,
    fontFamily: "Roboto-bold",
  },
});
