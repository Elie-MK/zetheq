import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colorsGlobal } from "../../../utilities/colorsGlobal";

type Props = {};

const UserProfile = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
          }}
        />
        <View>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userNameEmail}>johndoe@doe.com</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Feather name="edit-3" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginRight: 10,
    borderColor: colorsGlobal.gray,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  userName: {
    fontSize: 20,
    fontFamily: "Roboto-bold",
    marginBottom: 10,
  },
  userNameEmail: {
    fontSize: 16,
    color: colorsGlobal.secondGray,
    fontFamily: "Roboto-Regular",
  },
});
