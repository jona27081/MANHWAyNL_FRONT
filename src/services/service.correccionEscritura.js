import {openaiConfig} from "./configurationOpenai";

class ServiceCorreccionTexto {

  async getCorreccion(data) {
    const openai = new openaiConfig.getOpenai();
    const objectType = data.texto || '';
    if (objectType.trim().length === 0) {
      return {
        status: 400,
        error: {
          message: "Porfar escriba un tipo de objeto valido",
        }
      };
    }

    try {
      const completion = await openai.createEdit({
        model: "text-davinci-edit-001",
        input: `${data.texto}`,
        instruction: "Corrige el texto",
      });
      return {
        status: 200,
        result: completion.data.choices[0].text,
        prompt:  `Corrige el texto: ${data.texto}`,
        model: "text-davinci-edit-001"
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.status, error.response.data);        
        return {
          status: error.response.data
        }
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        return {
          status: 500,
          error: {
            message: 'An error occurred during your request.',
          }
        }
      }
    }
  }
}

const CorreccionTexto = new ServiceCorreccionTexto();
export default CorreccionTexto;