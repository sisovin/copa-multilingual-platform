import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InterviewService } from './interview.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('interview')
@Controller('interview')
export class InterviewController {
  constructor(private readonly interviewService: InterviewService) {}

  @ApiOperation({ summary: 'Get a technical interview prompt' })
  @ApiResponse({ status: 200, description: 'Technical interview prompt retrieved successfully.' })
  @Get('tech-prompt')
  getTechPrompt() {
    return this.interviewService.getTechPrompt();
  }

  @ApiOperation({ summary: 'Get a behavioral interview prompt' })
  @ApiResponse({ status: 200, description: 'Behavioral interview prompt retrieved successfully.' })
  @Get('behavioral-prompt')
  getBehavioralPrompt() {
    return this.interviewService.getBehavioralPrompt();
  }

  @ApiOperation({ summary: 'Evaluate an interview response' })
  @ApiBody({ schema: { type: 'object', properties: { response: { type: 'string' } } } })
  @ApiResponse({ status: 201, description: 'Interview response evaluated successfully.' })
  @Post('evaluate')
  evaluateResponse(@Body('response') response: string) {
    return this.interviewService.evaluateResponse(response);
  }
}
