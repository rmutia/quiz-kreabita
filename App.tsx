import React, { useState } from 'react';
import { AppState, Question } from './types';
import { QUESTION_POOL } from './constants';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.START);
  const [userName, setUserName] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  // Logic to ensure no repeated questions until pool is exhausted (approx 5 games)
  const getUniqueQuestions = (count: number): Question[] => {
    // 1. Get used IDs from localStorage
    const usedIdsJson = localStorage.getItem('bita_quiz_used_ids');
    let usedIds: number[] = usedIdsJson ? JSON.parse(usedIdsJson) : [];

    // 2. Filter available questions
    let availableQuestions = QUESTION_POOL.filter(q => !usedIds.includes(q.id));

    // 3. If not enough questions left, reset history and use full pool
    if (availableQuestions.length < count) {
      usedIds = [];
      availableQuestions = [...QUESTION_POOL];
    }

    // 4. Shuffle available questions
    const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    // 5. Update used IDs
    const newUsedIds = [...usedIds, ...selected.map(q => q.id)];
    localStorage.setItem('bita_quiz_used_ids', JSON.stringify(newUsedIds));

    return selected;
  };

  const handleStart = (name: string) => {
    setUserName(name || 'Sahabat Bita');
    setScore(0);
    // Get 10 unique questions
    const selectedQuestions = getUniqueQuestions(10);
    setQuizQuestions(selectedQuestions);
    setAppState(AppState.QUIZ);
  };

  const handleQuizFinish = (finalScore: number) => {
    setScore(finalScore);
    setAppState(AppState.RESULT);
  };

  const handleRestart = () => {
    setAppState(AppState.START);
    setUserName('');
    setScore(0);
    setQuizQuestions([]);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 font-sans text-brand-dark relative">
      <div className="absolute inset-0 bg-pattern pointer-events-none z-0"></div>
      <div className="w-full max-w-4xl mx-auto z-10">
        {appState === AppState.START && (
          <StartScreen onStart={handleStart} />
        )}
        {appState === AppState.QUIZ && (
          <QuizScreen 
            questions={quizQuestions}
            onFinish={handleQuizFinish} 
          />
        )}
        {appState === AppState.RESULT && (
          <ResultScreen 
            score={score} 
            userName={userName}
            totalQuestions={quizQuestions.length}
            onRestart={handleRestart} 
          />
        )}
      </div>
    </div>
  );
};

export default App;