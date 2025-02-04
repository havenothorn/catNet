import axios from "axios";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import api from "../utils/api";

interface Inputs extends FieldValues {
  email: string;
  name: string;
  password: string;
}

export const SignUp = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post(api.cats, data, {
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
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
