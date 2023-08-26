import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppColor } from "../constants/Colors";
import { Sizes } from "../constants/sizes";

export const Header = ({
  children,
  background,
}: {
  children?: ReactNode;
  background?: string;
}) => {
  const hasChildren = !!children;
  const { header, content, inset } = generateStyles({
    hasChildren,
    background,
  });

  return (
    <View style={header}>
      <View style={inset} />
      {hasChildren && <View style={content}>{children}</View>}
    </View>
  );
};

export default Header;

const generateStyles = ({
  hasChildren,
  background,
}: {
  hasChildren: boolean;
  background?: string;
}) => {
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    header: {},
    content: {
      backgroundColor: background ?? AppColor.NAV_BAR,
      padding: Sizes.Spacings.STANDARD,
      display: "flex",
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: AppColor.WARM_WHITE,
      flexDirection: "row",
    },
    inset: {
      height: insets.top,
      backgroundColor: "#11111f",
      borderColor: AppColor.WARM_WHITE,
      borderBottomWidth: hasChildren ? 0 : 1,
    },
  });
};
