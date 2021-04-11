import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child(props) {
  console.log(props)

  return <div className="child" onClick={() => props.onChangeColor(getRandomColor())} style={{ backgroundColor: props.color }} />;
}

export default Child;
