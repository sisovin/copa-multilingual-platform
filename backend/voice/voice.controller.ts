import { Controller, Post, Body } from '@nestjs/common';
import { VoiceService } from './voice.service';

@Controller('voice')
export class VoiceController {
  constructor(private readonly voiceService: VoiceService) {}

  @Post('transcribe')
  async transcribeAudio(@Body('audioFile') audioFile: File) {
    return this.voiceService.transcribeAudio(audioFile);
  }

  @Post('synthesize')
  async synthesizeSpeech(@Body('text') text: string, @Body('voice') voice: string) {
    return this.voiceService.synthesizeSpeech(text, voice);
  }
}
