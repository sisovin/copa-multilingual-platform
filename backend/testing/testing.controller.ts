import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestingService } from './testing.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('testing')
@Controller('testing')
export class TestingController {
  constructor(private readonly testingService: TestingService) {}

  @ApiOperation({ summary: 'Test core AI services' })
  @ApiBody({ schema: { type: 'object', properties: { prompt: { type: 'string' } } } })
  @ApiResponse({ status: 200, description: 'Core AI services tested successfully.' })
  @Post('core-ai')
  async testCoreAIServices(@Body('prompt') prompt: string) {
    return this.testingService.testCoreAIServices(prompt);
  }

  @ApiOperation({ summary: 'Test interview flow' })
  @ApiBody({ schema: { type: 'object', properties: { prompt: { type: 'string' }, targetLanguage: { type: 'string' } } } })
  @ApiResponse({ status: 200, description: 'Interview flow tested successfully.' })
  @Post('interview-flow')
  async testInterviewFlow(@Body('prompt') prompt: string, @Body('targetLanguage') targetLanguage: string) {
    return this.testingService.testInterviewFlow(prompt, targetLanguage);
  }

  @ApiOperation({ summary: 'Test video platform' })
  @ApiResponse({ status: 200, description: 'Video platform tested successfully.' })
  @Get('video-platform')
  async testVideoPlatform() {
    return this.testingService.testVideoPlatform();
  }

  @ApiOperation({ summary: 'Test voice services' })
  @ApiBody({ schema: { type: 'object', properties: { audioFile: { type: 'string', format: 'binary' } } } })
  @ApiResponse({ status: 200, description: 'Voice services tested successfully.' })
  @Post('voice-services')
  async testVoiceServices(@Body('audioFile') audioFile: File) {
    return this.testingService.testVoiceServices(audioFile);
  }
}
