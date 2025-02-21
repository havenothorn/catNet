import { style } from "@vanilla-extract/css";

export const navList = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100vw",
  padding: 20,
});

export const navItem = style({
  display: "flex",
  alignItems: "center",
  minWidth: 100,
  gap: 10,
});

export const profile = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const img = style({
  width: 50,
  height: 50,
  borderRadius: "50%",
  border: "3px solid #000",
  cursor: "pointer",
});
