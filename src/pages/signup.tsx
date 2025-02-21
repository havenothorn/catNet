import axios from "axios";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components/PageContainer";
import { Form } from "../components/Form";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";

interface Inputs extends FieldValues {
  email: string;
  name: string;
  password: string;
}

export const SignUp = () => {
  const router = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post(api.cats, data, {
        withCredentials: true,
      });
      console.log(response.data);
      if (response.data.data) {
        alert("회원가입이 완료되었습니다.");
        router("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer>
      <Logo>
        <h1>Sign Up</h1>
      </Logo>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="email"
          placeholder="이메일"
          autoComplete="off"
          register={register("email", { required: true })}
        />
        <InputField
          type="text"
          placeholder="이름"
          autoComplete="off"
          register={register("name", { required: true })}
        />
        <InputField
          type="password"
          placeholder="비밀번호"
          autoComplete="new-password"
          register={register("password", { required: true })}
        />
        <Button type="submit">회원가입</Button>
      </Form>
    </PageContainer>
  );
};
