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
      marginTop: 10,
      padding: "15px 20px",
      borderRadius: 5,
      color: "#fff",
      backgroundColor: "#000",
      cursor: "pointer",
    },
  ],
  menu: [
    buttonBase,
    {
      width: 100,
      padding: "5px 10px",
      borderRadius: 5,
      border: "1px solid #000",
      backgroundColor: "#fff",
      cursor: "pointer",
    },
  ],
  underline: [
    buttonBase,
    {
      marginTop: 10,
      color: "#777",
      border: "none",
      background: "none",
      textDecoration: "underline",
    },
  ],
});
