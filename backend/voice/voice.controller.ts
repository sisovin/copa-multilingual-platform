import { Controller, Post, Body } from '@nestjs/common';
import { VoiceService } from './voice.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('voice')
@Controller('voice')
export class VoiceController {
  constructor(private readonly voiceService: VoiceService) {}

  @ApiOperation({ summary: 'Transcribe audio file' })
  @ApiBody({ schema: { type: 'object', properties: { audioFile: { type: 'string', format: 'binary' } } } })
  @ApiResponse({ status: 200, description: 'Audio file transcribed successfully.' })
  @Post('transcribe')
  async transcribeAudio(@Body('audioFile') audioFile: File) {
    return this.voiceService.transcribeAudio(audioFile);
  }

  @ApiOperation({ summary: 'Synthesize speech from text' })
  @ApiBody({ schema: { type: 'object', properties: { text: { type: 'string' }, voice: { type: 'string' } } } })
  @ApiResponse({ status: 200, description: 'Speech synthesized successfully.' })
  @Post('synthesize')
  async synthesizeSpeech(@Body('text') text: string, @Body('voice') voice: string) {
    return this.voiceService.synthesizeSpeech(text, voice);
  }
}
