import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/engines/gpt-4/completions';

class OpenAIClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateText(prompt: string, maxTokens: number = 150): Promise<string> {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        prompt,
        max_tokens: maxTokens,
      },
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].text;
  }
}

export default OpenAIClient;
