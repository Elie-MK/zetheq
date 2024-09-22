import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colorsGlobal } from "../utilities/colorsGlobal";

type Props = {};

const BookGenreCard = (props: Props) => {
  return (
    <View style={{ marginRight: 10 }}>
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BFuuLxEn2NLjcV5a_qYVOOCUJRHZRP-7Ig&s",
        }}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.titleContainer}>
          <Text
            style={{
              color: colorsGlobal.white,
              padding: 10,
              fontFamily: "Roboto-bold",
            }}
          >
            Romance
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BookGenreCard;

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 100,
  },
  titleContainer: {
    top: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 160,
    height: 40,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
});
