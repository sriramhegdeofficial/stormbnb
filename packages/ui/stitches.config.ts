import { createStitches } from '@stitches/core';

export const {
    
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    theme: {
      colors: {
        primary: '#F04E1A',
        secondary: '#F76B0F',
        lightYellow: '#F7AA0F',
        scorchingYellow: '#F0BD11',
        black: '#000000',
        lightBlack: '#262525',
        grandmaGray: '#6B6B6B',
        barelyGray: '#BABABA',
        white: '#FFFFFF',
      },
    },
    media: {
      bp1: '(min-width: 480px)',
    },
  
  });