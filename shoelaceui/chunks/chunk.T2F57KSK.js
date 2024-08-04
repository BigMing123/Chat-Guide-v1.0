import {
  SlRating
} from "./chunk.I2A7QEJI.js";

// src/react/rating/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var rating_default = createComponent({
  tagName: "sl-rating",
  elementClass: SlRating,
  react: React,
  events: {
    onSlChange: "sl-change",
    onSlHover: "sl-hover"
  }
});

export {
  rating_default
};
