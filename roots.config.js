import { resolve, dirname } from 'path';
const __dirname = resolve(dirname('')); 

export const originDir = resolve(__dirname, 'app/_roots');
export const localizedDir = resolve(__dirname, 'app/(roots)');
export const locales = ['en', 'pl'];
export const defaultLocale = 'pl';
export const prefixDefaultLocale = false;