import { UseFormRegisterReturn } from "react-hook-form";
import * as styles from "./styles.css";

interface InputFieldProps {
  type: string;
  placeholder: string;
  autoComplete: string;
  register: UseFormRegisterReturn;
}

export const InputField = ({
  type,
  placeholder,
  autoComplete,
  register,
}: InputFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={styles.input}
      {...register}
    />
  );
};
