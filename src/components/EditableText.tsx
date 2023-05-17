import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

const editableStyle: React.CSSProperties = {
  fontSize: 40,
  textAlign: "center",
  position: "absolute",
  bottom: 140,
  width: "100%",
};

export const EditableText: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);
  return <div style={{ ...editableStyle, opacity }}>This text is editable</div>;
};
