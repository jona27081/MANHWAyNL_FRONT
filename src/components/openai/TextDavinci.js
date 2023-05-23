import { useState } from "react";
import "../../styles/openai.css";
import ServiceDavinci from "../../services/service.davinci"

export default function TextDavinci() {
  const [nameInput, setNameInput] = useState("");
  const [nameObjectType, setNameObjectType] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await ServiceDavinci.getDaVinci({ objectName: nameInput, objectType: nameObjectType });
      /*const response = await fetch("/text-davinci-003/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });*/

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setNameInput("");
      setNameObjectType("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <title>OpenAI Davinci</title>
      <div className="container">
        <form onSubmit={onSubmit}>
          <h3>Categoria: </h3>
          <input
            className="form-input"
            type="text"
            name="nameObjectType"
            placeholder="Enter the type of your object"
            value={nameObjectType}
            onChange={(e) => setNameObjectType(e.target.value)}
          />
          <h3>Palabra relacionada: </h3>
          <input
            className="form-input"
            type="text"
            name="nameInput"
            placeholder="Enter an name for your object"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className="result">{result}</div>
      </div>
    </div>
  );
}