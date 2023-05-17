import React from "react";
import reactLogo from "../assets/react.svg";

const logoBox: React.CSSProperties = {
  textAlign: "center",
  width: "100%",
};

const logoStyle: React.CSSProperties = {
  width: 200,
};

function Logo() {
  return (
    <div style={logoBox}>
      <img src={reactLogo} style={logoStyle} alt="React logo" />
    </div>
  );
}

export default Logo;
