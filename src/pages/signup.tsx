import axios from "axios";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

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
    <div>
      <p>Sign Up</p>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="text"
          autoComplete="off"
          placeholder="name"
          {...register("name", { required: true })}
        />
        <input
          type="password"
          autoComplete="new-password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
