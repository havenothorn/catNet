import * as style from "./styles.css.ts";

interface LogoProps {
  children: React.ReactNode;
}

export const Logo = ({ children }: LogoProps) => {
  return <div className={style.logo}>{children}</div>;
};
