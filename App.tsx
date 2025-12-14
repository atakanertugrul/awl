import React, { useState, useEffect, useCallback } from 'react';
import { Word, GameMode } from './types';
import { getWords } from './data';
import { FlashCard } from './components/FlashCard';
import { Button } from './components/Button';
import { ProgressBar } from './components/ProgressBar';
import { RefreshCw, CheckCircle, XCircle, Trophy, Settings } from 'lucide-react';

export default function App() {
  // Constants
  const ALL_WORDS = React.useMemo(() => getWords(), []);

  // State
  const [mode, setMode] = useState<GameMode>(GameMode.ENG_TR);
  const [remainingWords, setRemainingWords] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  // Initialize
  useEffect(() => {
    resetGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]); 

  // Logic
  const pickRandomWord = (list: Word[]) => {
    if (list.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  const resetGame = () => {
    setRemainingWords(ALL_WORDS);
    const firstWord = pickRandomWord(ALL_WORDS);
    setCurrentWord(firstWord);
    setCompletedCount(0);
    setIsRevealed(false);
    setIsFinished(false);
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleCorrect = () => {
    if (!currentWord) return;

    // Filter out the current word
    const newRemaining = remainingWords.filter(w => w.id !== currentWord.id);
    
    setCompletedCount(prev => prev + 1);
    setRemainingWords(newRemaining);

    if (newRemaining.length === 0) {
      setIsFinished(true);
      setCurrentWord(null);
    } else {
      nextTurn(newRemaining);
    }
  };

  const handleIncorrect = () => {
    // Keep word in pool, just pick another one
    // To improve UX, try not to pick the exact same one immediately if pool size > 1
    nextTurn(remainingWords);
  };

  const nextTurn = (pool: Word[]) => {
    setIsRevealed(false);
    let nextWord = pickRandomWord(pool);
    
    // Simple retry to avoid immediate repeat if pool is large enough
    if (pool.length > 1 && nextWord?.id === currentWord?.id) {
       nextWord = pickRandomWord(pool);
    }
    
    setCurrentWord(nextWord);
  };

  const toggleMode = () => {
    setMode(prev => prev === GameMode.ENG_TR ? GameMode.TR_ENG : GameMode.ENG_TR);
  };

  // Render
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center py-10 px-4">
      
      {/* Header */}
      <header className="w-full max-w-md mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">WordMaster</h1>
          <p className="text-sm text-slate-500">Akademik Kelime Çalışması</p>
        </div>
        
        <button 
          onClick={toggleMode}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
        >
          <Settings size={16} />
          {mode === GameMode.ENG_TR ? 'İng → Tr' : 'Tr → İng'}
        </button>
      </header>

      <main className="w-full max-w-md flex-1 flex flex-col">
        
        {/* Progress */}
        <div className="mb-8">
           <ProgressBar current={completedCount} total={ALL_WORDS.length} />
        </div>

        {/* Game Area */}
        {isFinished ? (
          <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl p-8 text-center animate-fade-in-up">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <Trophy size={48} className="text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Tebrikler!</h2>
            <p className="text-slate-600 mb-8">Tüm kelimeleri başarıyla tamamladın.</p>
            <Button onClick={resetGame} variant="primary" fullWidth>
              <RefreshCw size={20} />
              Başa Dön
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 flex flex-col justify-center mb-8 relative">
              {currentWord && (
                <FlashCard 
                  word={currentWord} 
                  isRevealed={isRevealed} 
                  mode={mode} 
                  onReveal={handleReveal} 
                />
              )}
            </div>

            {/* Controls */}
            <div className="mt-auto">
              {!isRevealed ? (
                <Button onClick={handleReveal} fullWidth variant="primary" className="h-16 text-lg">
                  Göster
                </Button>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <Button onClick={handleIncorrect} variant="danger" className="h-16">
                    <XCircle size={24} />
                    Yanlış
                  </Button>
                  <Button onClick={handleCorrect} variant="success" className="h-16">
                    <CheckCircle size={24} />
                    Doğru
                  </Button>
                </div>
              )}

              <div className="mt-6 flex justify-center">
                <button 
                  onClick={resetGame}
                  className="flex items-center gap-2 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
                >
                  <RefreshCw size={14} />
                  Sıfırla
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}