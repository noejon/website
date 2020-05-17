import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import { ThemeType } from '../lib/theme';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  /**
    RESET
  */

  /* Box sizing rules */
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  blockquote,
  body,
  dd,
  dl,
  figcaption,
  figure,
  h1,
  h2,
  h3,
  h4,
  li,
  ul[class],
  ol[class]
  p {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  html {
    --size: 40px;
    @media(max-width: ${({ theme }) => theme.breakpoints.md}) {
      --size: 3px;
    }
    --borderSize: calc(var(--size) / 2);
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.copy};
    color: ${({ theme }) => theme.colors.darkGrey};
    border: var(--borderSize) solid ${({ theme }) => theme.colors.lightGrey};
    border-color: ${({ theme }) => theme.colors.lightGrey};
    position: relative;
  }

  body {
    min-height: calc(100vh - var(--size));
    font-size: 1rem;
    line-height: 1.5;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    body: {
      overflow-x: hidden;
    }
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600; /* Corresponding to semi-bold */
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.darkerGrey};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => darken(0.05, theme.colors.main)};
  }

  h1 a {
    color: #555555;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.darkerGrey};
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) =>
      `${theme.colors.main} ${theme.colors.lightGrey}`};
  }
  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGrey};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 6px;
    border: 3px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;
export default GlobalStyles;
