export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export enum AppState {
  START = 'START',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT'
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: (number | null)[]; // Index of selected answers
  isFinished: boolean;
}