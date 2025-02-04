import axios from "axios";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import api from "../utils/api";
import { useAuth } from "../utils/store";
import { useNavigate } from "react-router-dom";

export const Login = () => {
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
