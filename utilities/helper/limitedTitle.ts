import { Text } from "react-native";

export function handleLimitedTitle(title: string) {
  if (title.length > 20) {
    return title.substring(0, 32) + "...";
  }
  return title;
}
