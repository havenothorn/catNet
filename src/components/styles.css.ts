import { style } from "@vanilla-extract/css";

export const list = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100vw",
});

export const itemWrap = style({
  display: "flex",
  justifyContent: "space-between",
  width: "10%",
});

export const item = style({
  display: "inline-block",
});
