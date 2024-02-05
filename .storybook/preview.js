import React from "react";
import "../src/main.css";

 export default {
    decorators: [(storyFn) => <>{storyFn()}</>],
  };