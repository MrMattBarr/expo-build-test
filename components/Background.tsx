import React from "react";
import { ImageBackground } from "react-native";

interface IBackground {
  children: React.ReactNode;
}
const Background = ({ children }: IBackground) => {
  const imgSrc = require("../assets/images/Background.jpeg");
  return (
    <ImageBackground
      source={imgSrc}
      style={{
        flexGrow: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
      }}
    >
      {children}
    </ImageBackground>
  );
};

export default Background;
