import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import FloatLabel from '../FloatLabel'
import { Input } from "antd";
import { InputFloatLabel } from '../InputFloatLabel/index'

import 'react-phone-input-2/lib/style.css';
import "antd/dist/antd.css";

export const Demo = () => {
  const [firstName] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {      
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phone: "",
      description: ""
    },
  });

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    // <form>
      <>
        {/* <FloatLabel label="First Name" name="firstName" value={firstName}>
          <Input {...register("firstName", { required: true })} />
        </FloatLabel> */}


        <InputFloatLabel placeholder="First Name*" />
        <InputFloatLabel placeholder ="Last Name*" />
        <InputFloatLabel placeholder="Organization*" />
        <InputFloatLabel type="email" placeholder="Email*" />
      </>
      
      // {errors.firstName && <p>Primeiro nome é obrigatório</p>}

      /* <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Último nome é obrigatório</p>}

      <input {...register("companyName", { required: true })} />
      {errors.companyName && <p>Empresa é obrigatório</p>}

      <input {...register("email", { required: true })} />
      {errors.email && <p>Email é obrigatório</p>}

      <PhoneInput placeholder="+" {...register("phone", { required: true })}
        value={getValues("phone")}
        onChange={(phone) => setValue("phone", phone)}        
      />
      {errors.email && <p>Telefone é obrigatório</p>}

      <textarea 
          rows={6}
          placeholder="quer nos contar suas ideias?"
          {...register("description")}
        /> */

      /* <button type="button" onClick={handleSubmit(onSubmit)}>
        Solicitar demo
      </button> */
    // </form>
  );
};