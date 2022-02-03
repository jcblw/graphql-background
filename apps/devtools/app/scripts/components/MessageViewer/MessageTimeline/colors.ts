import { useColorScheme, ColorScheme } from 'use-color-scheme';

export type Scheme = 'light' | 'dark';
export interface Theme {
  span: string;
  highlight: string;
  border: string;
  label: string;
}
export type ColorSchemes = Record<ColorScheme, Theme>;

/**
 * This theme holds some colors that are outside of the current theme. The reason fo this is
 * due to the issue of not having access to CSS variables inside the canvas.
 */
export const themes: ColorSchemes = {
  dark: {
    span: '#63b3ed',
    highlight: '#F8C06D',
    border: '#4a5568',
    label: '#CBD5E0',
  },
  light: {
    span: '#63b3ed',
    highlight: '#F8C06D',
    border: '#CBD5E0',
    label: '#4A5568',
  },
  none: {
    span: '#63b3ed',
    highlight: '#F8C06D',
    border: '#4a5568',
    label: '#CBD5E0',
  },
};

export const useTimelineColors = () => {
  const { scheme } = useColorScheme();
  return themes[scheme];
};
