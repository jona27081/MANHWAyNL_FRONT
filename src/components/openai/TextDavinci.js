import { useState } from "react";
import "../../styles/ServicesOpenai.css";
import TextDavinciService from "../../services/service.davinci"

const TextDavinci = ({onCancel, save}) => {
  const [nameInput, setNameInput] = useState("");
  const [nameObjectType, setNameObjectType] = useState("");
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
      const response = await TextDavinciService.getDaVinci({ objectName: nameInput, objectType: nameObjectType });

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      savePrompt("text-davinci-003", data.prompt, data.result);
      setNameInput("");
      setNameObjectType("");
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
          <h2>Openai Davinci</h2>
          <h4>Categoria</h4>
          <input
            type="text"
            placeholder="¿Acerca de que quieres nombres?"
            value={nameObjectType}
            onChange={(e) => setNameObjectType(e.target.value)}
            required
          />
          <h4>Palabra Relacionada</h4>
          <input
            type="text"
            placeholder="¿Sobre que quieres que se relacione?"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            required />
          <button type="submit" value="Generate names"> Generar </button>
          <button className="salir" onClick={handleSalir}>Salir</button>
          <div className="result">{result}</div>
        </form>
      </div>
    </div>
  );
}

export default TextDavinci;