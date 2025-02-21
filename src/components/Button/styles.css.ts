import { styleVariants, style } from "@vanilla-extract/css";

export const buttonBase = style({
  position: "relative",
  display: "block",
  width: "100%",
  fontSize: "16px",
  cursor: "pointer",
});

export const button = styleVariants({
  default: [
    buttonBase,
    {
      borderRadius: 5,
      marginTop: 20,
      padding: "15px 20px",
      cursor: "pointer",
      color: "#fff",
      backgroundColor: "#000",
    },
  ],
  underline: [
    buttonBase,
    {
      marginTop: 20,
      background: "none",
      color: "#777",
      border: "none",
      textDecoration: "underline",
    },
  ],
});
