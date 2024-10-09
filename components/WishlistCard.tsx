import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { colorsGlobal } from "../utilities/colorsGlobal";
import MenuDropdown from "./MenuDropdown";

type Props = {};

const WishlistCard = (props: Props) => {
  const width = Dimensions.get("window").width;
  function handleSelect() {}

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
              height: width < 380 ? 210 : 150,
              width: width < 380 ? 160 : 110,
            },
          ]}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>The Psychology of Money</Text>
          <View style={styles.rate}>
            <FontAwesome
              name="star-half-full"
              size={18}
              color={colorsGlobal.secondGray}
            />
            <Text style={styles.rateNumber}>4.9</Text>
          </View>
          <Text style={styles.price}>$9.99</Text>
        </View>
      </View>

      <MenuDropdown onSelect={handleSelect} />
    </View>
  );
};

export default WishlistCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
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
    fontSize: 18,
    fontWeight: "600",
  },
  rate: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rateNumber: {
    fontSize: 18,
    color: colorsGlobal.secondGray,
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: colorsGlobal.main,
  },
});
