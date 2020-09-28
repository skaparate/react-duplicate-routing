import React from "react";
import useLocationBlocker from "../LocationBlocker";

export default function Contact() {
  useLocationBlocker();
  return (
    <div className="Contact">
      <h2>Contact Me</h2>
    </div>
  );
}
