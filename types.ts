export interface Word {
  id: string;
  list: string;
  english: string;
  turkish: string;
}

export enum GameMode {
  ENG_TR = 'ENG_TR',
  TR_ENG = 'TR_ENG',
}

export interface GameState {
  currentWord: Word | null;
  remainingWords: Word[];
  completedCount: number;
  isRevealed: boolean;
  isFinished: boolean;
}