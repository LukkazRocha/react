import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-input-2'

import './styles.css';

export function Demo() {
    const {
      register,
      handleSubmit,  
          
      formState: { errors }
    } = useForm({
      defaultValues: {
        "name": "",
        "company": "",
        "email": "",
        "phone": "",
        "textarea": ""
      }
    });
    
    return (
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label>Nome*
          <input {...register("name", { required: true })} />
        </label>
        {errors.name && <p>Nome é obrigatório</p>}

        <label>Empresa*
        <input
          {...register("company", { required: true })}
        />
        </label>
        {errors.company && <p>Empresa é obrigatório</p>}

        <label>Email*
        <input 
          type="email" 
          {...register("email", { required: true })}
        />
        </label>
        {errors.email && <p>Email é obrigatório</p>}

        <label>Telefone*
          <PhoneInput
            placeholder="+"            
          />
        </label>

        <textarea 
          rows={6}
          placeholder="quer nos contar suas ideias?"
          {...register("textarea")}
        />                    
        
        <input type="submit" value="Solicitar demo" />
      </form>
    );
  }