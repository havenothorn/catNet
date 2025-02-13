import { style } from "@vanilla-extract/css";

export const list = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100vw",
});

export const itemWrap = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "10vw",
});

export const profile = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const img = style({
  width: 50,
  borderRadius: 25,
  border: "3px solid #000",
});
