import {openaiConfig} from "./configurationOpenai";

class ServiceDavinci {

  async getDaVinci(data) {
    const openai = new openaiConfig.getOpenai();
   
    const objectName = data.objectName || '';
    if (objectName.trim().length === 0) {
      /*
      res.status(400).json({
        error: {
          message: "Please enter a valid animal",
        }
      });
      */
      return {
        status: 400,
        error: {
          message: "Porfar escriba un nombre de objeto valido",
        }
      };
    }

    const objectType = data.objectType || '';
    if (objectType.trim().length === 0) {
      /*
      res.status(400).json({
        error: {
          message: "Please enter a valid animal",
        }
      });
      */
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
        prompt: this.generatePrompt(objectName, objectType),
        temperature: 0.6,
      });
      return {
        status: 200,
        result : completion.data.choices[0].text,
        prompt: this.generatePrompt(objectName, objectType)
      }
    } catch (error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
        // res.status(error.response.status).json(error.response.data);
        return {
          status: error.response.data
        }
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        /*
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.',
          }
        });
        */
        return {
          status: 500,
          error: {
            message: 'An error occurred during your request.',
          }
        }
      }
    }
  }

  generatePrompt(objectName, objectType) {
    const capitalizedName = objectName[0].toUpperCase() + objectName.slice(1).toLowerCase();
    return `
    Suggest me names about "${objectType}" and that are related to the word "${capitalizedName}". Give me three 
    names of sentences in the form and only the name, I don't need more information

    The format of your answer should be like this: "name 1, name 2, name 3"`;
  }

}

const TextDavinciService = new ServiceDavinci();
export default TextDavinciService;