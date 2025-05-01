import { Injectable } from '@nestjs/common';
import OpenAIClient from 'packages/ai/clients/openai';

@Injectable()
export class InterviewService {
  private openAIClient: OpenAIClient;

  constructor() {
    this.openAIClient = new OpenAIClient(process.env.OPENAI_API_KEY);
  }

  getTechPrompt(): string {
    // Implement logic to return a technical interview prompt
    return 'Please describe a challenging technical problem you have faced.';
  }

  getBehavioralPrompt(): string {
    // Implement logic to return a behavioral interview prompt
    return 'Tell me about a time you had to work in a team.';
  }

  async evaluateResponse(response: string): Promise<string> {
    // Implement logic to evaluate the interview response using GPT-4
    const prompt = `Evaluate the following interview response: ${response}`;
    const evaluation = await this.openAIClient.generateText(prompt);
    return evaluation;
  }
}
