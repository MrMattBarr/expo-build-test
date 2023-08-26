import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { AppColor } from "../constants/Colors";

export const Page = ({ children }: { children: ReactNode }) => {
  const styles = generateStyles();

  return (
    <View style={styles.page}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Page;

const generateStyles = () => {
  const isMobile = true;
  return {
    page: {
      display: "flex",
      flexDirection: "row",
      flexGrow: 1,
      justifyContent: "center",
    } as StyleProp<ViewStyle>,
    content: {
      width: isMobile ? "100%" : 1000,
      backgroundColor: "#000A",
      borderLeftWidth: isMobile ? undefined : 1,
      borderRightWidth: isMobile ? undefined : 1,
      borderColor: AppColor.ICY_BLUE,
    } as StyleProp<ViewStyle>,
  };
};
