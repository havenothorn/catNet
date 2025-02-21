import { button } from "./styles.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "underline" | "menu";
}

export function Button({ variant = "default", ...props }: ButtonProps) {
  return <button className={button[variant]} {...props} />;
}
