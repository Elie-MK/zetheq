import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MenuDropdown from "./MenuDropdown";
import { handleHaptics } from "../config/Haptics";
import { colorsGlobal } from "../utilities/colorsGlobal";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { BookState } from "../utilities/Enums/BookState.enums";

type Props = {};

const PurchasedCard = (props: Props) => {
  const width = Dimensions.get("window").width;
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  function handleSelect() {
    setOpenDropdown(!openDropdown);
  }

  function handleOpenDropdown() {
    setOpenDropdown((prev) => !prev);
    handleHaptics();
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="stretch"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflhdZrb7_S_IyCCUf4h4nV0ErvUF8QXaIEg&s",
          }}
          style={[
            styles.image,
            {
              height: width < 380 ? 120 : 150,
              width: width < 380 ? 80 : 110,
            },
          ]}
        />
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { fontSize: width < 380 ? 14 : 16 }]}>
            The Psychology of Money
          </Text>
          <View
            style={[
              styles.rate,
              {
                marginTop: width < 380 ? 10 : 15,
                marginBottom: width < 380 ? 10 : 15,
              },
            ]}
          >
            <FontAwesome
              name="star-half-full"
              size={18}
              color={colorsGlobal.secondGray}
            />
            <Text
              style={[styles.rateNumber, { fontSize: width < 380 ? 14 : 16 }]}
            >
              4.9
            </Text>
          </View>
          <Text style={[styles.price, { fontSize: width < 380 ? 14 : 16 }]}>
            Purchased
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <FontAwesome
            name="check-square"
            size={24}
            color={colorsGlobal.main}
          />
        </TouchableOpacity>
      </View>
      <MenuDropdown
        handleOpenDropdown={handleOpenDropdown}
        isDropdownOpen={openDropdown}
        onSelect={handleSelect}
        state={BookState.PURCHASED}
      >
        <Entypo
          name="dots-three-vertical"
          size={24}
          color={colorsGlobal.main}
        />
      </MenuDropdown>
    </View>
  );
};

export default PurchasedCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 15,
  },
  image: {
    borderRadius: 10,
  },
  titleContainer: {
    width: 180,
  },
  title: {
    fontWeight: "600",
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rateNumber: {
    color: colorsGlobal.secondGray,
    fontWeight: "600",
  },
  price: {
    fontWeight: "600",
    color: colorsGlobal.secondGray,
  },
});
