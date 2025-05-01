import { Injectable } from '@nestjs/common';
import VoiceAPIClient from 'packages/ai/clients/vapi';

@Injectable()
export class VoiceService {
  private voiceAPIClient: VoiceAPIClient;

  constructor() {
    this.voiceAPIClient = new VoiceAPIClient(process.env.VOICE_API_KEY);
  }

  async transcribeAudio(audioFile: File): Promise<string> {
    return this.voiceAPIClient.transcribeAudio(audioFile);
  }

  async synthesizeSpeech(text: string, voice: string = 'en-US'): Promise<Blob> {
    return this.voiceAPIClient.synthesizeSpeech(text, voice);
  }
}
