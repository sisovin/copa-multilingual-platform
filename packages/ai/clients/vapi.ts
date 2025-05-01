import axios from 'axios';

const VOICE_API_URL = 'https://api.voiceapi.com/v1';

class VoiceAPIClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = this.apiKey;
  }

  async transcribeAudio(audioFile: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', audioFile);

    const response = await axios.post(
      `${VOICE_API_URL}/transcribe`,
      formData,
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data.transcription;
  }

  async synthesizeSpeech(text: string, voice: string = 'en-US'): Promise<Blob> {
    const response = await axios.post(
      `${VOICE_API_URL}/synthesize`,
      {
        text,
        voice,
      },
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return new Blob([response.data.audio], { type: 'audio/wav' });
  }
}

export default VoiceAPIClient;
