import { useForm } from "react-hook-form";
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
        "phone": ""
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
          <input
            type="tel"
            {...register("phone", { required: true })}
          />
        </label>
        {errors.phone && <p>Telefone é obrigatório</p>}
        
        <input type="submit" value="Solicitar demo" />
      </form>
    );
  }