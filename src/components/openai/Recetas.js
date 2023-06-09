import { useState } from "react";
import "../../styles/ServicesOpenai.css";
import RecetaService from "../../services/service.recetas";

const Recetas = ({onCancel, save}) => {
  const [texto, setTexto] = useState("");
  const [result, setResult] = useState();

  const handleSalir = () => {
    onCancel();
  }

  const savePrompt = (modelo, prompt, result) =>{
    save(modelo, prompt, result);
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await RecetaService.getReceta({texto: texto });

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      savePrompt(data.model, data.prompt, data.result);
      setTexto("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="centeredDivServices">
      <div className="contentWrapperServices">

        <form className="formContainerServices" onSubmit={onSubmit}>
          <h2>Recetas a partir de determinados ingredientes</h2>
          <h4>¿Que ingrediente deseas agregar?</h4>
          <input
            type="text"
            placeholder="Ingresa tus ingredientes..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            required
          />
          <button type="submit" value="Generate"> Generar </button>
          <button className="salir" onClick={handleSalir}>Salir</button>
          <div className="result">{result}</div>
        </form>
      </div>
    </div>
  );
}

export default Recetas;