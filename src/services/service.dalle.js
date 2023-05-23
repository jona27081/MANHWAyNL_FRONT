import {openaiConfig} from "./configurationOpenai";

class ServiceDalle {

    async getImgIA(data) {

        const openai = new openaiConfig.getOpenai();

        const imgDescription = data.desc || '';
        if (imgDescription.trim().length === 0) {
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

        try {
            const response = await openai.createImage({
                prompt: `${data.desc}`,
                n: 1,
                size: "1024x1024",
            });
            console.log(response.data.data[0].url);
    
            return {
                status: 200,
                result: response.data.data[0].url
            }
        } catch (error) {
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
}

export default new ServiceDalle();