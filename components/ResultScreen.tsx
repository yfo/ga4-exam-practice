import React from 'react';
import { Award, BarChart2, RefreshCcw, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { GameMode, UserAnswer, GameState, Question } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface ResultScreenProps {
  gameMode: GameMode;
  score: number;
  totalQuestions: number;
  percentage: number;
  isPass: boolean;
  userAnswers: UserAnswer[];
  questions: Question[];
  setGameState: (state: GameState) => void;
  handleStart: (mode: GameMode) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  gameMode,
  score,
  totalQuestions,
  percentage,
  isPass,
  userAnswers,
  questions,
  setGameState,
  handleStart,
  theme,
  toggleTheme
}) => {
  const incorrectAnswers = userAnswers.filter(a => !a.isCorrect);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-end">
               <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        
        {/* Score Card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden text-center relative border border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div className={`h-3 w-full ${isPass ? 'bg-green-500' : 'bg-red-500'}`} />
          <div className="p-12 md:p-16">
            <div className={`mb-8 inline-flex p-6 rounded-full ${isPass ? 'bg-green-50 dark:bg-green-900/30' : 'bg-red-50 dark:bg-red-900/30'}`}>
              {isPass ? <Award className="w-20 h-20 text-green-500 dark:text-green-400" /> : <BarChart2 className="w-20 h-20 text-red-500 dark:text-red-400" />}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              {isPass ? '恭喜通過！' : '再接再厲！'}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg max-w-md mx-auto leading-relaxed">
              {gameMode === 'EXAM' 
                  ? `考試結束。您在 50 題中答對了 ${score} 題。請查看下方錯題解析。`
                  : '複習結束。您已完成所有題目的練習。'}
            </p>
            
            <div className="flex justify-center items-center gap-6 md:gap-16 mb-12">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl min-w-[120px]">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">{score} / {totalQuestions}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-2">答對題數</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl min-w-[120px]">
                <div className={`text-4xl font-bold ${isPass ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {percentage}%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-2">正確率 (及格 80%)</div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
               <button
                  onClick={() => setGameState(GameState.START)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold rounded-xl transition-all"
              >
                  回首頁
              </button>
              <button
                  onClick={() => handleStart(gameMode)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 dark:shadow-none hover:-translate-y-1"
              >
                  <RefreshCcw className="w-5 h-5" />
                  {gameMode === 'EXAM' ? '再次模擬考' : '重新複習'}
              </button>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 flex items-center justify-between">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              錯誤題目檢討與解析
              <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs px-2 py-1 rounded-full">{incorrectAnswers.length} 題</span>
            </h3>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {incorrectAnswers.length === 0 ? (
              <div className="p-16 text-center text-gray-500 dark:text-gray-400 flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-4">
                   <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">太厲害了！全對！</p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">完美的表現。</p>
              </div>
            ) : (
              incorrectAnswers.map((answer, idx) => {
                const question = questions.find(q => q.id === answer.questionId);
                if (!question) return null;
                return (
                  <div key={idx} className="p-6 md:p-8 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold rounded border border-gray-200 dark:border-gray-700">
                        {question.id}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide py-1">{question.category.split('：')[1] || question.category}</span>
                    </div>
                    <p className="font-bold text-gray-800 dark:text-gray-200 mb-6 text-lg leading-relaxed">{question.question}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-1">
                           <div className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">您的回答</div>
                          <div className="flex items-start gap-3 text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-900/50 h-full">
                          <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold">{answer.selectedOption}</span>
                          </div>
                      </div>
                      <div className="space-y-1">
                           <div className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">正確答案</div>
                          <div className="flex items-start gap-3 text-green-800 dark:text-green-300 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-900/50 h-full">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold">{question.correctAnswer}</span>
                          </div>
                      </div>
                    </div>

                    {question.explanation && (
                      <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-4 text-blue-900 dark:text-blue-200 text-sm leading-relaxed">
                          <span className="font-bold block mb-1">解析：</span>
                          {question.explanation}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
