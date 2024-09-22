import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colorsGlobal } from "../utilities/colorsGlobal";
import { handleLimitedTitle } from "../utilities/helper/limitedTitle";

type Props = {};

const BookCard = (props: Props) => {
  const width = Dimensions.get("window").width;
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{ width: width < 380 ? 140 : 160, marginRight: 30 }}>
        <Image
          resizeMode="stretch"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflhdZrb7_S_IyCCUf4h4nV0ErvUF8QXaIEg&s",
          }}
          style={[
            styles.image,
            {
              height: width < 380 ? 210 : 270,
              width: width < 380 ? 160 : 180,
            },
          ]}
        />
        <View>
          <Text
            style={[
              styles.title,
              {
                fontSize: width < 380 ? 12 : 18,
                lineHeight: width < 380 ? 15 : 25,
              },
            ]}
          >
            {handleLimitedTitle(
              "The Psychology of Money The Psychology of Money"
            )}
          </Text>
          <View style={styles.priceContainer}>
            <View style={styles.starContainer}>
              <FontAwesome
                name="star-half-empty"
                size={18}
                color={colorsGlobal.secondGray}
              />
              <Text style={[styles.price, { fontSize: width < 380 ? 12 : 18 }]}>
                4.6
              </Text>
            </View>
            <Text style={[styles.price, { fontSize: width < 380 ? 12 : 18 }]}>
              $7.50
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
  },
  title: {
    fontFamily: "Roboto-bold",
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },
  price: {
    color: colorsGlobal.secondGray,
    fontFamily: "Roboto-bold",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
