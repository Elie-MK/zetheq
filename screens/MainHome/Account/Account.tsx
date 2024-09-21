import { StyleSheet, View } from "react-native";
import React from "react";
import MainContainer from "../MainContainer";
import Header from "../../../components/Header";
import { HeaderEnums } from "../../../utilities/Enums/header/Header.enums";

type Props = {};

const Account = (props: Props) => {
  return (
    <MainContainer>
      <View>
        <Header screen={HeaderEnums.ACCOUNT} />
      </View>
    </MainContainer>
  );
};

export default Account;

const styles = StyleSheet.create({});
