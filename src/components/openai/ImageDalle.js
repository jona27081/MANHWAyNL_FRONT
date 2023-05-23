import { useState } from "react";
import "../../styles/openai.css";
import ServiceDalle from "../../services/service.dalle"

export default function ImageDalle() {
  const [descInput, setDesInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await ServiceDalle.getImgIA({ desc: descInput});
      
      const data = await response;
      console.log(response);

      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setDesInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <title>OpenAI Quickstart</title>
      <div className="container">
        <form onSubmit={onSubmit}>
          <h3>¿Que imagen deseas crear?</h3>
          <input
            className="form-input"
            type="text"
            name="descInput"
            placeholder="Enter your description"
            value={descInput}
            onChange={(e) => setDesInput(e.target.value)}
          />
          <input type="submit" value="Generate Image" />
        </form>
        <img className="image" src={result} alt="imagen"/>
      </div>
    </div>
  );
}