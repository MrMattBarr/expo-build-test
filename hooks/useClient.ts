import { Platform, useWindowDimensions } from "react-native";

export default function useClient() {
  const { width } = useWindowDimensions();
  const isMobileWeb = width <= 1000;
  const isApp = Platform.OS !== "web";
  const isMobile = isMobileWeb || isApp;
  const isDesktop = !isMobile;
  return { isMobile, isApp, isDesktop };
}
