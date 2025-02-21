import axios from "axios";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/store";
import api from "../../utils/api";
import * as styles from "./styles.css";
import { InputField } from "../InputField";
import { Button } from "../Button";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const router = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await axios.post(`${api.cats}/login`, data, {
        withCredentials: true,
      });
      console.log(response.data);
      const getResponse = await axios.get(`${api.cats}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${response.data.data.token}`,
        },
      });

      login({ ...getResponse.data.data, token: response.data.data.token });
      router("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <InputField
        type="email"
        placeholder="이메일"
        autoComplete="off"
        register={register("email", { required: true })}
      />
      <InputField
        type="password"
        placeholder="비밀번호"
        autoComplete="new-password"
        register={register("password", { required: true })}
      />
      <Button type="submit">로그인</Button>
      <Button
        type="button"
        variant="underline"
        onClick={() => router("/signup")}
      >
        회원가입
      </Button>
    </form>
  );
};
