import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InterviewService } from './interview.service';

@Controller('interview')
export class InterviewController {
  constructor(private readonly interviewService: InterviewService) {}

  @Get('tech-prompt')
  getTechPrompt() {
    return this.interviewService.getTechPrompt();
  }

  @Get('behavioral-prompt')
  getBehavioralPrompt() {
    return this.interviewService.getBehavioralPrompt();
  }

  @Post('evaluate')
  evaluateResponse(@Body('response') response: string) {
    return this.interviewService.evaluateResponse(response);
  }
}
