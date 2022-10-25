import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";

import 'react-phone-input-2/lib/style.css';

export const PhoneInputLabel = () => {

  const {
    getValues,
    setValue,
  } = useForm();

  return (
    <PhoneInput
      value={getValues("phone")}
      onChange={(phone) => setValue("phone", phone)}
    />   
  );
};

