import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  width: "100%",
  maxWidth: 460,
  height: "100vh",
});
