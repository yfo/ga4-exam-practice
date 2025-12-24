import React, { useState, useEffect } from 'react';
import { questions } from './data';
import { GameState, UserAnswer, GameMode, Question } from './types';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { shuffleArray } from './utils';

const EXAM_DURATION = 75 * 60; // 75 minutes in seconds
const STORAGE_KEY = 'ga4_certification_state';

interface PersistedState {
  gameState: GameState;
  gameMode: GameMode;
  activeQuestions: Question[];
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  selectedOption: string | null;
  isAnswerRevealed: boolean;
  targetEndTime: number | null;
  theme: 'light' | 'dark';
}

export default function App() {
  // Initialize state from local storage or defaults
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).gameState : GameState.START;
  });
  const [gameMode, setGameMode] = useState<GameMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).gameMode : 'REVIEW';
  });
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).activeQuestions : questions;
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).currentQuestionIndex : 0;
  });
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).userAnswers : [];
  });
  const [selectedOption, setSelectedOption] = useState<string | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).selectedOption : null;
  });
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).isAnswerRevealed : false;
  });
  const [targetEndTime, setTargetEndTime] = useState<number | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).targetEndTime : null;
  });
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).theme : 'light';
  });

  // TimeLeft is derived/calculated, not directly persisted to avoid lag, but initialized from targetEndTime
  const [timeLeft, setTimeLeft] = useState(0);

  // Initialize timeLeft on mount based on targetEndTime
  useEffect(() => {
    if (gameState === GameState.PLAYING && gameMode === 'EXAM' && targetEndTime) {
      const remaining = Math.max(0, Math.floor((targetEndTime - Date.now()) / 1000));
      setTimeLeft(remaining);
    }
  }, []); // Run only once on mount

  // Persistence Effect
  useEffect(() => {
    const stateToSave: PersistedState = {
      gameState,
      gameMode,
      activeQuestions,
      currentQuestionIndex,
      userAnswers,
      selectedOption,
      isAnswerRevealed,
      targetEndTime,
      theme
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  }, [gameState, gameMode, activeQuestions, currentQuestionIndex, userAnswers, selectedOption, isAnswerRevealed, targetEndTime, theme]);

  // Timer Logic
  useEffect(() => {
    let timer: number;
    if (gameState === GameState.PLAYING && gameMode === 'EXAM' && targetEndTime) {
      timer = window.setInterval(() => {
        const remaining = Math.max(0, Math.floor((targetEndTime - Date.now()) / 1000));
        setTimeLeft(remaining);

        if (remaining <= 0) {
          clearInterval(timer);
          setGameState(GameState.FINISHED);
          setTargetEndTime(null);
        }
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState, gameMode, targetEndTime]);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const totalQuestions = activeQuestions.length;

  const handleStart = (mode: GameMode) => {
    setGameMode(mode);
    setGameState(GameState.PLAYING);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    
    if (mode === 'EXAM') {
      const shuffled = shuffleArray(questions);
      setActiveQuestions(shuffled.slice(0, 50));
      const end = Date.now() + EXAM_DURATION * 1000;
      setTargetEndTime(end);
      setTimeLeft(EXAM_DURATION);
    } else {
      setActiveQuestions(questions);
      setTargetEndTime(null);
      setTimeLeft(0);
    }
    
    window.scrollTo(0, 0);
  };

  const handleExit = () => {
    if (window.confirm('確定要退出嗎？目前的進度將不會保存。')) {
      setGameState(GameState.START);
      setTargetEndTime(null);
      // Optional: Clear storage or just let the new state overwrite it
    }
  };

  const handleOptionSelect = (option: string) => {
    if (gameMode === 'REVIEW' && isAnswerRevealed) return;
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;

    if (gameMode === 'REVIEW') {
      const isCorrect = selectedOption === currentQuestion.correctAnswer;
      const answer: UserAnswer = {
        questionId: currentQuestion.id,
        selectedOption: selectedOption,
        isCorrect: isCorrect
      };
      // We don't necessarily need to add to userAnswers in review mode for score unless we want to track it
      // But based on original logic, it adds to userAnswers.
      
      // Wait, original logic:
      // setUserAnswers([...userAnswers, answer]);
      // setIsAnswerRevealed(true);
      
      // If user answers multiple times for same question in review? 
      // Original logic allows appending. We should probably only keep the latest or first?
      // Original logic just appends. 
      // Let's stick to original behavior but we need to check if we should overwrite previous answer for this question?
      // In review mode, it seems we just show the answer.
      
      setUserAnswers(prev => [...prev, answer]);
      setIsAnswerRevealed(true);
    } else {
      const isCorrect = selectedOption === currentQuestion.correctAnswer;
      const answer: UserAnswer = {
        questionId: currentQuestion.id,
        selectedOption: selectedOption,
        isCorrect: isCorrect
      };
      
      setUserAnswers(prev => [...prev, answer]);
      
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
        window.scrollTo(0, 0);
      } else {
        setGameState(GameState.FINISHED);
        setTargetEndTime(null);
        window.scrollTo(0, 0);
      }
    }
  };

  const handleNextQuestionReview = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
      window.scrollTo(0, 0);
    } else {
      setGameState(GameState.FINISHED);
      window.scrollTo(0, 0);
    }
  };

  const score = userAnswers.filter(a => a.isCorrect).length;
  // Calculate percentage based on answers count or total questions?
  // Original: (score / totalQuestions) * 100
  // Note: In review mode, if user answers same question multiple times, score might be > totalQuestions if we just append?
  // In review mode, we usually don't count score for "Certificate", but the result screen shows it.
  // Let's assume user answers once per question or the simple logic holds.
  const percentage = Math.round((score / totalQuestions) * 100) || 0;
  const isPass = percentage >= 80;

  return (
    <div className={theme}>
        <div className="font-sans text-gray-900 dark:text-gray-100 antialiased selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100">
        {gameState === GameState.START && (
            <StartScreen 
                handleStart={handleStart} 
                theme={theme} 
                toggleTheme={toggleTheme} 
            />
        )}
        {gameState === GameState.PLAYING && (
            <QuizScreen
                gameMode={gameMode}
                timeLeft={timeLeft}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={totalQuestions}
                currentQuestion={currentQuestion}
                selectedOption={selectedOption}
                isAnswerRevealed={isAnswerRevealed}
                handleExit={handleExit}
                handleOptionSelect={handleOptionSelect}
                handleSubmitAnswer={handleSubmitAnswer}
                handleNextQuestionReview={handleNextQuestionReview}
                theme={theme}
                toggleTheme={toggleTheme}
            />
        )}
        {gameState === GameState.FINISHED && (
            <ResultScreen
                gameMode={gameMode}
                score={score}
                totalQuestions={totalQuestions}
                percentage={percentage}
                isPass={isPass}
                userAnswers={userAnswers}
                questions={questions}
                setGameState={setGameState}
                handleStart={handleStart}
                theme={theme}
                toggleTheme={toggleTheme}
            />
        )}
        </div>
    </div>
  );
}