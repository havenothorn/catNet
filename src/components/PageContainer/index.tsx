import * as styles from "./styles.css";

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
