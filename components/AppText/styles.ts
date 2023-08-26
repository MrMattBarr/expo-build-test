import { Sizes } from "../../constants/sizes";
import useColors from "../../hooks/useColors";
import { StyleSheet } from "react-native";

interface options {
  isHeader: boolean;
  bold: boolean;
  kalam?: boolean;
  wrap?: boolean;
  strikeThrough?: boolean;
}
export const generateStyles = ({
  isHeader,
  bold,
  kalam,
  wrap,
  strikeThrough,
}: options) => {
  const colors = useColors();
  return StyleSheet.create({
    text: {
      color: colors.Text.default,
      fontWeight: isHeader || bold ? "bold" : "normal",
      fontFamily: kalam ? "Kalam" : undefined,
      textDecorationLine: strikeThrough ? "line-through" : undefined,
      textDecorationStyle: "solid",
      fontSize: isHeader
        ? kalam
          ? Sizes.Fonts.HEADER * 1.5
          : Sizes.Fonts.HEADER
        : Sizes.Fonts.DFEAULT,
    },
  });
};
