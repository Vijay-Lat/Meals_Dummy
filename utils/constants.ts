import { Platform } from "react-native";
export const isIos = Platform.OS === "ios" as boolean;
export const isAndroid = Platform.OS === "android" as boolean;