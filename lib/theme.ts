type BreakpointsType = {
  sm: string,
  md: string,
  lg: string,
  xl: string
}

type ColorsType = {
  darkerGrey: string,
  darkGrey: string,
  grey: string,
  lighterGrey: string,
  lightGrey: string,
  main: string,
  white: string
}

type FontsType = {
  copy: string,
  heading: string
}

export type ThemeType = {
  breakpoints: BreakpointsType,
  colors: ColorsType,
  fonts: FontsType
}

const theme: ThemeType = {
  breakpoints: {
    sm: '420px',
    md: '768px',
    lg: '1024px',
    xl: '1366px'
  },
  colors: {
    darkerGrey: '#444444',
    darkGrey:'#666666',
    grey:'#aaaaaa',
    lightGrey:'#eaeaea',
    lighterGrey:'#f8f8f8',
    main: '#0abab5',
    white: '#ffffff'
  },
  fonts: {
    copy: '"Roboto", "Helvetica Neue", "Helvetica", sans-serif',
    heading: '"Open Sans", "Helvetica Neue", "Helvetica", sans-serif'
  }
}

export default theme