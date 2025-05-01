export interface Transcription {
  text: string;
  language: string;
  timestamp: Date;
}

export interface SynthesisRequest {
  text: string;
  voice: string;
  language: string;
}

export interface VoiceResponse {
  audioUrl: string;
  duration: number;
  format: string;
}
