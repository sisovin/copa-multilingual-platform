import { Injectable } from '@nestjs/common';
import OpenAIClient from 'packages/ai/clients/openai';

@Injectable()
export class InterviewService {
  private openAIClient: OpenAIClient;

  constructor() {
    this.openAIClient = new OpenAIClient(process.env.OPENAI_API_KEY);
  }

  getTechPrompt(): string {
    return 'Please describe a challenging technical problem you have faced.';
  }

  getBehavioralPrompt(): string {
    return 'Tell me about a time you had to work in a team.';
  }

  async evaluateResponse(response: string): Promise<string> {
    const prompt = `Evaluate the following interview response: ${response}`;
    const evaluation = await this.openAIClient.generateText(prompt);
    return evaluation;
  }
}
