import { Configuration, OpenAIApi } from "openai";

export const openaiConfig = {
  
  getOpenai: function () {
    const configuration = new Configuration({
      apiKey: "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",
    });

    if (!configuration.apiKey) {
      throw new Error("OpenAI API key not configured, please follow instructions in README.md");
    }

    return new OpenAIApi(configuration);
  }
};


