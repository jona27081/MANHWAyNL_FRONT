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


