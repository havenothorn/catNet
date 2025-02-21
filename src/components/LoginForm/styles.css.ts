import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  width: 460,
});

export const link = style({
  color: "#777",
  textDecoration: "underline",
  cursor: "pointer",
});
