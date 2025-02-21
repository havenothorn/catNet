import * as styles from "./styles.css";

interface FormProps {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
}

export const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form autoComplete="off" onSubmit={onSubmit} className={styles.form}>
      {children}
    </form>
  );
};
