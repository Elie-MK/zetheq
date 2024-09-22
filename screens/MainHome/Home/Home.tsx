import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colorsGlobal } from "../../../utilities/colorsGlobal";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";
import MainContainer from "../MainContainer";
import BookCard from "../../../components/BookCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BookGenreCard from "../../../components/BookGenreCard";

type Props = {};

const Home = (props: Props) => {
  const width = Dimensions.get("window").width;

  return (
    <MainContainer>
      <View>
        <Header screen={HeaderEnums.HOME} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bodyContainer}>
            <ScrollView style={{ paddingRight: 20 }} horizontal>
              {[1, 2, 3, 4, 5].map((item) => (
                <BookCard key={item} />
              ))}
            </ScrollView>
            <View style={styles.exploreContainer}>
              <View style={styles.titleSection}>
                <Text
                  style={[styles.title, { fontSize: width < 380 ? 18 : 25 }]}
                >
                  Explore by Genre
                </Text>
                <TouchableOpacity activeOpacity={0.5}>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={width < 380 ? 24 : 30}
                    color={colorsGlobal.main}
                  />
                </TouchableOpacity>
              </View>
              <ScrollView style={{ paddingRight: 20 }} horizontal>
                {[1, 2, 3, 4, 5].map((item) => (
                  <BookGenreCard key={item} />
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsGlobal.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : undefined,
  },
  secondContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  bodyContainer: {
    marginTop: 10,
  },
  exploreContainer: {
    marginRight: 10,
    marginTop: 20,
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: colorsGlobal.main,
    fontFamily: "Roboto-bold",
  },
});
