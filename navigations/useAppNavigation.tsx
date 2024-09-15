import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const useAppNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return navigation;
};
