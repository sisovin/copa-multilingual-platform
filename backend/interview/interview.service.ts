import { Injectable } from '@nestjs/common';
import OpenAIClient from 'packages/ai/clients/openai';
import GoogleTranslator from 'packages/ai/translators/google';

@Injectable()
export class InterviewService {
  private openAIClient: OpenAIClient;
  private googleTranslator: GoogleTranslator;

  constructor() {
    this.openAIClient = new OpenAIClient(process.env.OPENAI_API_KEY);
    this.googleTranslator = new GoogleTranslator(process.env.GOOGLE_TRANSLATION_API_KEY);
  }


  async translatePrompt(prompt: string, targetLanguage: string): Promise<string> {
    return this.googleTranslator.translateText(prompt, targetLanguage);
  }

  async getTechPrompt(targetLanguage: string = 'en'): Promise<string> {
    const prompt = 'Please describe a challenging technical problem you have faced.';
    return this.translatePrompt(prompt, targetLanguage);
  }

  async getBehavioralPrompt(targetLanguage: string = 'en'): Promise<string> {
    const prompt = 'Tell me about a time you had to work in a team.';
    return this.translatePrompt(prompt, targetLanguage);

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
