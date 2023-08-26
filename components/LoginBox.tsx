import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import TextMark from "./TextMark";
import AppText from "./AppText";
import { AppColor } from "../constants/Colors";
import { Sizes } from "../constants/sizes";
import Spinner from "./Spinner";
import useColors from "../hooks/useColors";
import useClient from "../hooks/useClient";

const LoginImage = require("../assets/images/login.jpg");
const DesktopImage = require("../assets/images/login-mobile.jpg");

const LoginBox = () => {
  const [spinning, setSpinning] = useState(false);
  const [error, setError] = useState(false);
  const isMobile = true;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetError = () => setError(false);

  useEffect(() => {
    if (email && password) {
      resetError();
    }
  }, [email, password]);
  useEffect(() => {
    if (error) {
      setPassword("");
    }
  }, [error]);

  const imgSrc = isMobile ? DesktopImage : LoginImage;

  const login = async () => {
    setSpinning(true);
    // const user = await authStore.authenticateWithEmail({
    //   email,
    //   password,
    // });
    // if (!user) {
    //   setError(true);
    //   setSpinning(false);
    // }
  };
  const styles = generateStyles({ spinning, error });
  return (
    <View style={styles.boxHolder}>
      <View style={styles.box}>
        <Image source={imgSrc} style={styles.image} />
        <View style={styles.login}>
          <TextMark accent={error ? AppColor.CHALK_RED : undefined} />
          <View style={styles.loginControls}>
            <AppText style={styles.label}>User ID</AppText>
            <TextInput
              editable={!spinning}
              style={styles.input}
              onFocus={resetError}
              value={email}
              onChangeText={setEmail}
            />
            <AppText style={styles.label}>Password</AppText>
            <TextInput
              value={password}
              onChangeText={setPassword}
              editable={!spinning}
              onFocus={resetError}
              secureTextEntry
              style={styles.input}
            />
          </View>
          <Pressable
            disabled={spinning || error}
            style={styles.signInButton}
            onPress={login}
          >
            <View style={styles.spinnerBox}>
              <Spinner spinning size={50} color={AppColor.PEACH} />
            </View>
            <AppText style={styles.signInButtonText}>Sign In</AppText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginBox;

interface IStyleProps {
  spinning?: boolean;
  error?: boolean;
}
const generateStyles = (props?: IStyleProps) => {
  const { spinning, error } = props ?? {};
  const colors = useColors();
  const { isMobile } = useClient();
  return StyleSheet.create({
    boxHolder: {
      background: "blue",
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    box: {
      backgroundColor: AppColor.CHARCOAL,
      width: isMobile ? "100%" : undefined,
      height: isMobile ? "100%" : undefined,
      borderColor: isMobile ? colors.Borders.default : "#625653",
      borderRadius: isMobile ? 0 : Sizes.VERY_CURVED_BORDER,
      borderTopWidth: 2,
      borderLeftWidth: isMobile ? 0 : 2,
      borderRightWidth: isMobile ? 0 : 2,
      overflow: "hidden",
      marginTop: isMobile ? 0 : 50,
      alignSelf: "center",
      maxWidth: isMobile ? "100%" : 1000,
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      aspectRatio: isMobile ? undefined : 16 / 9,
      flexGrow: 1,
    },
    login: {
      flexGrow: 1,
      padding: 30,
      display: "flex",
      flexDirection: "column",
      justifyContent: isMobile ? undefined : "space-evenly",
      overflow: "hidden",
      flexShrink: 1,
    },
    logoHolder: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      flexShrink: 1,
      height: isMobile ? 150 : undefined,
    },
    image: {
      alignSelf: "flex-end",
      display: "flex",
      height: isMobile ? 150 : "100%",
      width: isMobile ? "100%" : "50%",
      maxWidth: isMobile ? "100%" : "50%",
    },
    textmark: {
      maxHeight: 125,
      flexShrink: 1,
      width: "100%",
    },
    input: {
      borderWidth: 1,
      fontSize: Sizes.Fonts.HEADER,
      borderColor: error ? AppColor.CHALK_RED : AppColor.PEACH,
      backgroundColor: "#e895800C",
      color: colors.Text.default,
      paddingVertical: Sizes.Spacings.STANDARD,
      paddingHorizontal: Sizes.Spacings.LARGE,
      marginBottom: Sizes.Spacings.LARGE,
      borderRadius: Sizes.VERY_CURVED_BORDER,
    },
    loginControls: {
      display: "flex",
      marginBottom: isMobile ? Sizes.Spacings.LARGE : undefined,
    },
    spinnerBox: {
      position: "absolute",
      display: spinning ? "flex" : "none",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    label: {
      color: error ? AppColor.CHALK_RED : AppColor.PEACH,
      marginLeft: Sizes.Spacings.STANDARD,
      marginBottom: Sizes.Spacings.SMALL,
      fontWeight: "bold",
    },
    signInButton: {
      backgroundColor: AppColor.STONE_GRAY,
      alignSelf: isMobile ? undefined : "flex-end",
      paddingHorizontal: Sizes.Spacings.LARGE,
      paddingVertical: Sizes.Spacings.SMALL,
      borderRadius: Sizes.VERY_CURVED_BORDER,
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
      borderWidth: 2,
      cursor: "pointer",
      userSelect: "none",
      borderColor: error ? AppColor.CHALK_RED : AppColor.PEACH,
    },
    signInButtonText: {
      fontSize: Sizes.Fonts.BIG_BUTTON,
      color: spinning
        ? AppColor.TRANSPARENT
        : error
        ? AppColor.CHALK_RED
        : AppColor.WARM_WHITE,
    },
  });
};
