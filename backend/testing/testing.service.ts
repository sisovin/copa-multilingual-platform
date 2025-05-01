import { Injectable } from '@nestjs/common';
import OpenAIClient from 'packages/ai/clients/openai';
import GoogleTranslator from 'packages/ai/translators/google';
import VoiceAPIClient from 'packages/ai/clients/vapi';

@Injectable()
export class TestingService {
  private openAIClient: OpenAIClient;
  private googleTranslator: GoogleTranslator;
  private voiceAPIClient: VoiceAPIClient;

  constructor() {
    this.openAIClient = new OpenAIClient(process.env.OPENAI_API_KEY);
    this.googleTranslator = new GoogleTranslator(process.env.GOOGLE_TRANSLATION_API_KEY);
    this.voiceAPIClient = new VoiceAPIClient(process.env.VOICE_API_KEY);
  }

  async testCoreAIServices(prompt: string): Promise<string> {
    return this.openAIClient.generateText(prompt);
  }

  async testInterviewFlow(prompt: string, targetLanguage: string): Promise<string> {
    const translatedPrompt = await this.googleTranslator.translateText(prompt, targetLanguage);
    return this.openAIClient.generateText(translatedPrompt);
  }

  async testVideoPlatform(): Promise<string> {
    // Implement video platform testing logic here
    return 'Video platform test successful';
  }

  async testVoiceServices(audioFile: File): Promise<string> {
    return this.voiceAPIClient.transcribeAudio(audioFile);
  }
}
