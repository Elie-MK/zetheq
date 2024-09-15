import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { IOnboardingDatas } from "../onboardingDatasInterface";

const width = Dimensions.get("window").width;

type Props = {
  datas: IOnboardingDatas;
};

const OnboardingItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{props.datas.title}</Text>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text style={styles.description}>{props.datas.description}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={props.datas.image} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 100,
  },
  text: {
    fontFamily: "Roboto-Bold",
    fontSize: width < 380 ? 18 : 30,
  },
  description: {
    fontFamily: "Roboto-Light",
    fontSize: width < 380 ? 13 : 18,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: width < 380 ? 200 : 300,
    height: width < 380 ? 200 : 300,
  },
});
