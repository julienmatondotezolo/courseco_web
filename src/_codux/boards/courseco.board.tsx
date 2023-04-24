import React from "react";
import { createBoard } from "@wixc3/react-board";

export default createBoard({
  name: "courseco",
  Board: () => (
    <div>
      <nav>
        <a href="/home">Home</a> | <a href="/projects">Projects</a> | <a href="/about">About</a> |{" "}
        <a href="/contact">Contact Us</a>
      </nav>
    </div>
  ),
});
