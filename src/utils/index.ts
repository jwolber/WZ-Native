import wzMappings from '../assets/game-modes.json';

export const cleanGameMode = (mode: string): string => {
  //@ts-ignore
  const foundMode: string = wzMappings.modes[mode];
  if (!foundMode) {
    return mode;
  }
  return foundMode;
};
