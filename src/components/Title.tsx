import React from "react";

const titleStyle: React.CSSProperties = {
  fontFamily: "SF Pro Text, Helvetica, Arial, sans-serif",
  fontWeight: "bold",
  fontSize: 60,
  textAlign: "center",
  position: "absolute",
  top: 180,
  width: "100%",
};

export const Title: React.FC<{
  titleText: string;
}> = ({ titleText }) => {
  return <h1 style={titleStyle}>{titleText}</h1>;
};
