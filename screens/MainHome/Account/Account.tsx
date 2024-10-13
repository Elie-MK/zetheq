import { StyleSheet, View } from "react-native";
import React from "react";
import MainContainer from "../MainContainer";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";
import UserProfile from "./UserProfile";
import Settings from "./Settings";

type Props = {};

const Account = (props: Props) => {
  return (
    <MainContainer>
      <View style={{ flex: 1 }}>
        <Header screen={HeaderEnums.ACCOUNT} />
        <UserProfile />
        <Settings />
      </View>
    </MainContainer>
  );
};

export default Account;

const styles = StyleSheet.create({});
