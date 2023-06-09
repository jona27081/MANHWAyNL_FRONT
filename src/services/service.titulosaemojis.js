import {openaiConfig} from "./configurationOpenai";

class ServicePeliculasEmojis {

  async getEmojis(data) {
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
        prompt: `Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \n${data.texto}:`,
        temperature: 0.8,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
      return {
        status: 200,
        result: completion.data.choices[0].text,
        model: "text-davinci-003",
        prompt: `Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \n${data.texto}:`,
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

const EmojisService = new ServicePeliculasEmojis();
export default EmojisService;