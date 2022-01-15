import { atom } from 'jotai';
import Player from '../entities/Player';

export const queryAtom = atom<string>('');
export const playersAtom = atom<Player[]>([]);
export const playersFilteredAtom = atom<Player[]>([]);