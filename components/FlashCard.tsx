import React from 'react';
import { Word, GameMode } from '../types';
import { Eye, EyeOff, Volume2 } from 'lucide-react';

interface FlashCardProps {
  word: Word;
  isRevealed: boolean;
  mode: GameMode;
  onReveal: () => void;
}

export const FlashCard: React.FC<FlashCardProps> = ({ word, isRevealed, mode, onReveal }) => {
  const isEngToTr = mode === GameMode.ENG_TR;
  
  const questionWord = isEngToTr ? word.english : word.turkish;
  const answerWord = isEngToTr ? word.turkish : word.english;

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    const textToSpeak = isEngToTr ? word.english : word.turkish; // Speak the question word usually
    // Or if revealed, maybe speak the English word regardless of mode? 
    // Let's stick to speaking the English part always as it's for learning English
    const utterance = new SpeechSynthesisUtterance(word.english);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="perspective-1000 w-full max-w-md mx-auto h-80 cursor-pointer group" onClick={onReveal}>
      <div className={`relative w-full h-full text-center transition-all duration-500 transform ${isRevealed ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
        
        {/* Front Face */}
        <div className={`absolute w-full h-full backface-hidden bg-white border border-slate-100 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
           <span className="absolute top-4 right-4 text-xs font-semibold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-full uppercase tracking-wider">
            {word.list}
          </span>
          
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{questionWord}</h2>
          
          <div className="mt-8 text-slate-400 text-sm flex items-center gap-2 animate-pulse">
            <Eye size={16} />
            <span>Cevabı görmek için dokun</span>
          </div>

          <button 
            onClick={handleSpeak}
            className="absolute bottom-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-indigo-600 transition-colors"
          >
            <Volume2 size={24} />
          </button>
        </div>

        {/* Back Face (We handle the flip effect manually via Conditional rendering for simplicity in React without heavy 3D CSS, 
            but standard flip card CSS usually requires absolute positioning. 
            Here I used opacity toggle above for smoother simple experience, but let's do a real flip if possible.
            Actually, for a quiz app, simple state change often feels snappier.)
        */}
      </div>

       {/* Simple State Based Card (Overriding the 3D flip for better mobile usability/simplicity) */}
       <div className={`absolute inset-0 w-full h-full bg-white border border-slate-100 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${isRevealed ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}>
          <span className="absolute top-4 right-4 text-xs font-semibold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-full uppercase tracking-wider">
            Soru
          </span>
          <h2 className="text-4xl font-bold text-slate-800 break-words w-full">{questionWord}</h2>
          <div className="mt-8 text-slate-400 text-sm flex items-center gap-2">
            <Eye size={16} />
            <span>Cevabı Göster</span>
          </div>
          <button 
            onClick={handleSpeak}
            className="absolute bottom-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-indigo-600 transition-colors"
          >
            <Volume2 size={24} />
          </button>
       </div>

       <div className={`absolute inset-0 w-full h-full bg-indigo-50 border border-indigo-100 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${isRevealed ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <span className="absolute top-4 right-4 text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full uppercase tracking-wider">
            Cevap
          </span>
          
          <div className="text-center">
            <p className="text-lg text-slate-500 mb-2">{questionWord}</p>
            <div className="w-16 h-1 bg-indigo-200 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-4xl font-bold text-indigo-900 break-words w-full">{answerWord}</h2>
          </div>

          <button 
            onClick={handleSpeak}
            className="absolute bottom-6 right-6 p-2 rounded-full hover:bg-indigo-200 text-indigo-400 hover:text-indigo-700 transition-colors"
          >
            <Volume2 size={24} />
          </button>
       </div>
    </div>
  );
};