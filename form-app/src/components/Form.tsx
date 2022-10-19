export const Form = () => {
    return (
      <form className="form_container">
        <div>
          <input type="text" name="name" id="name" placeholder="Nome" />
        </div>
        <div>
          <input type="text" name="company" id="company" placeholder="Empresa" />
        </div>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="text" placeholder="Telefone" />
        </div>
        <textarea name="description" id="description" placeholder="Já quer nos descrever um pouco?"></textarea>
        <input type="submit" value="Enviar" />      
      </form>
    );
  }