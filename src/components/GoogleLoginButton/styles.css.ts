import { style } from "@vanilla-extract/css";

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  marginTop: "10px",
  backgroundColor: "white",
  border: "1px solid #747775",
  borderRadius: 20,
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
  color: "#1f1f1f",
  ":hover": {
    backgroundColor: "#f8f9fa",
    boxShadow:
      "0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15)",
  },
});

export const buttonContent = style({
  display: "flex",
  alignItems: "center",
  selectors: {
    [`${button}:hover &`]: {
      backgroundColor: "#f8f9fa",
    },
  },
});

export const iconWrapper = style({
  width: "18px",
  height: "18px",
});

export const icon = style({
  display: "block",
  width: "100%",
  height: "100%",
});
