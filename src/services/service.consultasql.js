import {openaiConfig} from "./configurationOpenai";

class ServiceConsultasSQL {

  async getSQL(data) {
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
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Create a SQL request to ${data.texto}:`,
        temperature: 0.3,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      return {
        status: 200,
        result: completion.data.choices[0].text,
        prompt: `Create a SQL request to ${data.texto}:`
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

const SQLService = new ServiceConsultasSQL();
export default SQLService;