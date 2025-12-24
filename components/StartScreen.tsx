import React from 'react';
import { Award, AlertCircle, BookOpen, Clock } from 'lucide-react';
import { GameMode } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface StartScreenProps {
  handleStart: (mode: GameMode) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ handleStart, theme, toggleTheme }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 py-12 transition-colors duration-300">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 z-20">
             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <div className="mx-auto bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm shadow-inner">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">GA4 認證考試題庫</h1>
            <p className="text-blue-100 font-medium">2025 最新版 • 62 題完整收錄</p>
          </div>
        </div>
        
        <div className="p-8 space-y-8">
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 flex gap-3 text-amber-800 dark:text-amber-200 text-sm shadow-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">注意：GA4 介面持續更新，題目中提到的「重要事件 (Key Events)」即為過去的「轉換 (Conversions)」。</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => handleStart('REVIEW')}
              className="group relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 border-2 border-green-100 dark:border-green-900/50 rounded-xl hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">複習模式</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                完整 62 題練習<br/>
                答題後立即顯示正確答案與解析<br/>
                <span className="text-green-600 dark:text-green-400 font-medium mt-1 block">適合學習與記憶</span>
              </p>
            </button>

            <button
              onClick={() => handleStart('EXAM')}
              className="group relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 border-2 border-blue-100 dark:border-blue-900/50 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">模擬考試</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                隨機抽出 50 題<br/>
                無即時提示，考後統一結算<br/>
                <span className="text-blue-600 dark:text-blue-400 font-medium mt-1 block">75 分鐘限時測驗</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
