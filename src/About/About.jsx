import React from "react";
import useLocationBlocker from "../LocationBlocker";

export default function About() {
  useLocationBlocker();
  return (
    <div className="about">
      <h2>About Me</h2>
    </div>
  );
}
