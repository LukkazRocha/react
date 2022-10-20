import { useForm, SubmitHandler } from "react-hook-form";
import "./styles.css";

type Inputs = {
  name: string,
  company_name: string,
  email: string
};

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  // console.log(watch("name")) // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name*" /* defaultValue=""  */{...register("name", { required: true })} />
      {errors.name && <p>Name is required</p>}
      
      <input placeholder="Organization*" {...register("company_name", { required: true })} />
      {errors.company_name && <p>Organization is required</p>}

      <input placeholder="Email*" type="email" {...register("email", { required: true })} />
      {errors.email && <p>Email is required</p>}
      
      <input type="submit" />
    </form>
  );
}