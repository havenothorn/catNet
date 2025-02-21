import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { Logo } from "../components/Logo";
import { PageContainer } from "../components/PageContainer";
import axios from "axios";
import api from "../utils/api";
import { useAuth } from "../utils/store";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { InputField } from "../components/InputField";

export const Login = () => {
  const { login } = useAuth();
  const router = useNavigate();
  const { register, handleSubmit } = useForm();

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
    <PageContainer>
      <Logo>
        <h1>Logo</h1>
      </Logo>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
      </Form>
    </PageContainer>
  );
};
