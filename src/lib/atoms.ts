import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const isActiveAtome = atom(false);
export const darkModeAtom = atomWithStorage('darkMode', false);

export const sessionAtom = atom(null);
