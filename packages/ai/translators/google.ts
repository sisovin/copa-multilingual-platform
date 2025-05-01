import axios from 'axios';

const GOOGLE_TRANSLATION_API_URL = 'https://translation.googleapis.com/language/translate/v2';

class GoogleTranslator {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async translateText(text: string, targetLanguage: string): Promise<string> {
    const response = await axios.post(
      GOOGLE_TRANSLATION_API_URL,
      {
        q: text,
        target: targetLanguage,
        format: 'text',
      },
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.data.translations[0].translatedText;
  }
}

export default GoogleTranslator;
