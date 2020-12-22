import * as React from "react";
import imgPortrait from "../../../../static/portrait.jpg";

const Logo = () => (
  <img style={{ clipPath: "circle(50% at center)" }} src={imgPortrait}></img>
);

export default Logo;
