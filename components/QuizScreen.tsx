import React from 'react';
import { Timer, X, ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import { GameMode, Question } from '../types';
import { ThemeToggle } from './ThemeToggle';
import { formatTime } from '../utils';

interface QuizScreenProps {
  gameMode: GameMode;
  timeLeft: number;
  currentQuestionIndex: number;
  totalQuestions: number;
  currentQuestion: Question;
  selectedOption: string | null;
  isAnswerRevealed: boolean;
  handleExit: () => void;
  handleOptionSelect: (option: string) => void;
  handleSubmitAnswer: () => void;
  handleNextQuestionReview: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  gameMode,
  timeLeft,
  currentQuestionIndex,
  totalQuestions,
  currentQuestion,
  selectedOption,
  isAnswerRevealed,
  handleExit,
  handleOptionSelect,
  handleSubmitAnswer,
  handleNextQuestionReview,
  theme,
  toggleTheme
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center py-8 px-4 transition-colors duration-300">
      {/* Header / Progress */}
      <div className="w-full max-w-3xl mb-6 flex flex-col gap-4">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className={`px-3 py-1 text-sm font-bold rounded-full text-white ${gameMode === 'EXAM' ? 'bg-blue-600 shadow-blue-200 dark:shadow-none' : 'bg-green-600 shadow-green-200 dark:shadow-none'}`}>
                    {gameMode === 'EXAM' ? '模擬考模式' : '複習模式'}
                </span>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              {/* Exam Timer */}
              {gameMode === 'EXAM' && (
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono font-bold transition-colors
                  ${timeLeft < 300 
                    ? 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 animate-pulse' 
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Timer className="w-4 h-4" />
                  <span>{formatTime(timeLeft)}</span>
                </div>
              )}

              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              
              <button 
                onClick={handleExit}
                className="group flex items-center gap-1.5 px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all font-medium text-sm"
                title="退出測驗"
              >
                <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>退出</span>
              </button>
            </div>
         </div>

         <div className="flex flex-col gap-2">
             <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Progress</span>
                <span className={`text-sm font-bold px-3 py-0.5 rounded-full ${gameMode === 'EXAM' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400' : 'text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400'}`}>
                  {currentQuestionIndex + 1} / {totalQuestions}
                </span>
             </div>
             <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                <div 
                  className={`h-full transition-all duration-500 ease-out relative ${gameMode === 'EXAM' ? 'bg-blue-600' : 'bg-green-600'}`}
                  style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                >
                    <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-white/30 to-transparent"></div>
                </div>
             </div>
         </div>
      </div>

      {/* Card */}
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden flex-1 flex flex-col transition-colors duration-300">
        {/* Question Header */}
        <div className="p-6 md:p-10 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 relative transition-colors duration-300">
          <div className={`absolute top-0 left-0 w-1 h-full ${gameMode === 'EXAM' ? 'bg-blue-600' : 'bg-green-600'}`}></div>
          <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
            {currentQuestion.category.split('：')[1] || currentQuestion.category}
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-relaxed">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="p-6 md:p-10 space-y-4 bg-gray-50/50 dark:bg-black/20 flex-1 transition-colors duration-300">
          {currentQuestion.options.map((option, idx) => {
            let statusClass = "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20";
            
            // Logic for visual feedback
            if (gameMode === 'REVIEW' && isAnswerRevealed) {
              if (option === currentQuestion.correctAnswer) {
                statusClass = "border-green-500 dark:border-green-500 bg-green-50/50 dark:bg-green-900/20 ring-1 ring-green-500";
              } else if (option === selectedOption && option !== currentQuestion.correctAnswer) {
                statusClass = "border-red-500 dark:border-red-500 bg-red-50/50 dark:bg-red-900/20 ring-1 ring-red-500";
              } else {
                statusClass = "border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-600 opacity-60 bg-gray-50 dark:bg-gray-900";
              }
            } else if (selectedOption === option) {
              statusClass = "border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 ring-1 ring-blue-600 dark:ring-blue-500 shadow-md transform scale-[1.01]";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                disabled={gameMode === 'REVIEW' && isAnswerRevealed}
                className={`group w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ease-in-out flex items-start gap-4 ${statusClass}`}
              >
                <div className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 bg-white dark:bg-gray-800 transition-colors
                    ${gameMode === 'REVIEW' && isAnswerRevealed && option === currentQuestion.correctAnswer ? 'border-green-500' : 
                      gameMode === 'REVIEW' && isAnswerRevealed && option === selectedOption ? 'border-red-500' : 
                      selectedOption === option ? 'border-blue-600 dark:border-blue-500' : 'border-gray-300 dark:border-gray-600'}`}>
                  
                  {gameMode === 'REVIEW' && isAnswerRevealed && option === currentQuestion.correctAnswer ? <CheckCircle className="w-4 h-4 text-green-500" /> :
                   gameMode === 'REVIEW' && isAnswerRevealed && option === selectedOption ? <XCircle className="w-4 h-4 text-red-500" /> :
                   selectedOption === option ? <div className="w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full" /> : null
                  }
                </div>
                <span className={`text-base md:text-lg leading-relaxed font-medium ${gameMode === 'REVIEW' && isAnswerRevealed && option !== currentQuestion.correctAnswer && option !== selectedOption ? 'text-gray-400 dark:text-gray-600' : 'text-gray-800 dark:text-gray-200'}`}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer Action */}
        <div className="p-6 md:p-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 sticky bottom-0 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] transition-colors duration-300">
          
          {/* Review Mode: Reveal Logic */}
          {gameMode === 'REVIEW' && (
            !isAnswerRevealed ? (
                <div className="w-full flex justify-end">
                    <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedOption}
                    className={`w-full md:w-auto px-10 py-3.5 rounded-xl font-bold text-white text-lg transition-all transform active:scale-95
                        ${selectedOption 
                        ? 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-none hover:-translate-y-0.5' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                        }`}
                    >
                    提交答案
                    </button>
                </div>
            ) : (
                <>
                <div className={`flex-1 p-4 rounded-xl text-sm md:text-base font-medium border flex flex-col gap-2 animate-fade-in
                    ${selectedOption === currentQuestion.correctAnswer 
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300' 
                        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'}`}>
                    <div className="flex items-center gap-3">
                        {selectedOption === currentQuestion.correctAnswer ? (
                        <div className="bg-green-200 dark:bg-green-800 p-1.5 rounded-full"><CheckCircle className="w-5 h-5 text-green-700 dark:text-green-300" /></div>
                        ) : (
                        <div className="bg-red-200 dark:bg-red-800 p-1.5 rounded-full"><XCircle className="w-5 h-5 text-red-700 dark:text-red-300" /></div>
                        )}
                        <span className="font-bold">{selectedOption === currentQuestion.correctAnswer ? '回答正確！' : '回答錯誤。'}</span>
                    </div>
                    {currentQuestion.explanation && (
                         <div className="mt-1 pl-11 text-sm opacity-90 border-t border-black/5 dark:border-white/10 pt-2">
                            <span className="font-bold mr-1">解析：</span>{currentQuestion.explanation}
                         </div>
                    )}
                </div>
                <button
                    onClick={handleNextQuestionReview}
                    className="w-full md:w-auto px-8 py-3.5 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                    {currentQuestionIndex < totalQuestions - 1 ? '下一題' : '查看結果'}
                    <ChevronRight className="w-5 h-5" />
                </button>
                </>
            )
          )}

          {/* Exam Mode: Direct Next Logic */}
          {gameMode === 'EXAM' && (
             <div className="w-full flex justify-end">
                <button
                onClick={handleSubmitAnswer}
                disabled={!selectedOption}
                className={`w-full md:w-auto px-10 py-3.5 rounded-xl font-bold text-white text-lg transition-all transform active:scale-95 flex items-center justify-center gap-2
                    ${selectedOption 
                    ? 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-none hover:-translate-y-0.5' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    }`}
                >
                {currentQuestionIndex < totalQuestions - 1 ? '下一題' : '交卷'}
                <ChevronRight className="w-5 h-5" />
                </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
