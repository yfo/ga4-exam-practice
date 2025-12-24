export interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED'
}

export type GameMode = 'REVIEW' | 'EXAM';

export interface UserAnswer {
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
}