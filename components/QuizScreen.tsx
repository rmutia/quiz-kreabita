import React, { useState } from 'react';
import { Question } from '../types';
import Button from './Button';
import { CheckCircle2, XCircle, ArrowRight, HelpCircle } from 'lucide-react';

interface QuizScreenProps {
  onFinish: (score: number) => void;
  questions: Question[];
}

const QuizScreen: React.FC<QuizScreenProps> = ({ onFinish, questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);

  if (!questions || questions.length === 0) {
    return <div>Memuat pertanyaan...</div>;
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleOptionClick = (index: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    setIsAnswerChecked(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      // Pass the current score state directly. 
      // It has already been updated by handleCheckAnswer.
      onFinish(score);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
      {/* Header / HUD */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-white px-4 py-2 rounded-full shadow-md border-2 border-brand-blue flex items-center gap-2">
            <span className="font-bold text-brand-blue">Soal {currentIndex + 1}</span>
            <span className="text-gray-400 text-sm">/ {questions.length}</span>
        </div>
        
        <div className="bg-white px-4 py-2 rounded-full shadow-md border-2 border-brand-yellow flex items-center gap-2">
            <span className="text-brand-orange font-bold text-xl">★</span>
            <span className="font-bold text-brand-dark">{score} Poin</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 bg-white/50 p-1 rounded-full shadow-inner backdrop-blur-sm">
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div 
            className="bg-brand-blue h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden" 
            style={{ width: `${progress}%` }}
          >
             <div className="absolute top-0 left-0 bottom-0 w-full bg-white/20 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_8px_0_0_rgba(0,0,0,0.1)] border-4 border-white relative overflow-hidden">
        
        {/* Question Card */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 leading-snug">
            {currentQuestion.question}
          </h2>

          <div className="grid gap-4">
            {currentQuestion.options.map((option, idx) => {
              let btnClass = "w-full text-left p-5 rounded-2xl border-2 transition-all font-medium text-lg flex items-center justify-between group relative overflow-hidden ";
              
              if (isAnswerChecked) {
                if (idx === currentQuestion.correctAnswer) {
                  btnClass += "bg-green-100 border-green-500 text-green-800";
                } else if (idx === selectedOption) {
                  btnClass += "bg-red-100 border-red-500 text-red-800";
                } else {
                  btnClass += "bg-gray-50 border-gray-200 text-gray-400 opacity-60";
                }
              } else {
                if (idx === selectedOption) {
                  btnClass += "bg-brand-blue/10 border-brand-blue text-brand-blue shadow-inner";
                } else {
                  btnClass += "bg-white border-gray-200 hover:border-brand-blue hover:bg-blue-50 text-gray-700 hover:shadow-md hover:-translate-y-1";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswerChecked}
                  className={btnClass}
                >
                  <span className="relative z-10">{option}</span>
                  {isAnswerChecked && idx === currentQuestion.correctAnswer && (
                    <CheckCircle2 className="text-green-600 relative z-10" />
                  )}
                  {isAnswerChecked && idx === selectedOption && idx !== currentQuestion.correctAnswer && (
                    <XCircle className="text-red-600 relative z-10" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-8 min-h-[100px] flex items-end">
          {!isAnswerChecked ? (
            <Button 
              onClick={handleCheckAnswer} 
              disabled={selectedOption === null}
              className="w-full shadow-lg"
              size="lg"
            >
              Cek Jawaban
            </Button>
          ) : (
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className={`p-5 rounded-2xl mb-6 flex gap-4 ${
                selectedOption === currentQuestion.correctAnswer 
                  ? 'bg-green-100 border-2 border-green-200 text-green-800' 
                  : 'bg-orange-50 border-2 border-orange-200 text-orange-900'
              }`}>
                <div className={`p-2 rounded-full h-fit shrink-0 ${selectedOption === currentQuestion.correctAnswer ? 'bg-green-200' : 'bg-orange-200'}`}>
                    {selectedOption === currentQuestion.correctAnswer ? <CheckCircle2 size={24}/> : <HelpCircle size={24}/>}
                </div>
                <div>
                    <p className="font-bold text-lg mb-1">
                    {selectedOption === currentQuestion.correctAnswer ? 'Hebat! Kamu Benar!' : 'Yah, Kurang Tepat...'}
                    </p>
                    <p className="leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              </div>
              <Button 
                onClick={handleNext} 
                variant={selectedOption === currentQuestion.correctAnswer ? 'success' : 'primary'}
                className="w-full flex items-center justify-center gap-2 shadow-lg"
                size="lg"
              >
                {currentIndex < questions.length - 1 ? 'Soal Selanjutnya' : 'Lihat Hasil'} <ArrowRight size={24} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;