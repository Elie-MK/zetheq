import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";
import { colorsGlobal } from "../../../utilities/colorsGlobal";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";
import MainContainer from "../MainContainer";
import BookCard from "../../../components/BookCard";

type Props = {};

const Home = (props: Props) => {
  return (
    <MainContainer>
      <View>
        <Header screen={HeaderEnums.HOME} />

        <View style={styles.bodyContainer}>
          <ScrollView style={{ paddingRight: 20 }} horizontal>
            {[1, 2, 3, 4, 5].map((item) => (
              <BookCard key={item} />
            ))}
          </ScrollView>
          <View style={styles.exploreContainer}>
            <Text style={styles.title}>Explore by Genre</Text>
          </View>
        </View>
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
    marginTop: 20,
  },
  exploreContainer: {
    marginRight: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: colorsGlobal.main,
  },
});
