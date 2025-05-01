export interface InterviewPrompt {
  id: string;
  type: 'technical' | 'behavioral';
  question: string;
}

export interface InterviewResponse {
  promptId: string;
  response: string;
  timestamp: Date;
}

export interface EvaluationResult {
  promptId: string;
  responseId: string;
  score: number;
  feedback: string;
}
