import { darken, lighten } from 'polished';

type BreakpointsType = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type ColorsType = {
  black: string;
  darkerGrey: string;
  darkGrey: string;
  grey: string;
  lighterGrey: string;
  lightGrey: string;
  darkMain: string;
  main: string;
  lightMain: string;
  white: string;
};

type FontsType = {
  copy: string;
  heading: string;
};

export type ThemeType = {
  breakpoints: BreakpointsType;
  colors: ColorsType;
  fonts: FontsType;
};

const theme: ThemeType = {
  breakpoints: {
    sm: '420px',
    md: '768px',
    lg: '1024px',
    xl: '1366px',
  },
  colors: {
    black: '#000000',
    darkerGrey: '#444444',
    darkGrey: '#666666',
    grey: '#aaaaaa',
    lightGrey: '#eaeaea',
    lighterGrey: '#f8f8f8',
    darkMain: darken(0.05, '#009FE3'),
    main: '#009FE3',
    lightMain: lighten(0.05, '#009FE3'),
    white: '#ffffff',
  },
  fonts: {
    copy: '"Roboto", "Helvetica Neue", "Helvetica", sans-serif',
    heading: '"Open Sans", "Helvetica Neue", "Helvetica", sans-serif',
  },
};

export default theme;
