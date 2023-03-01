import { createStitches } from '@stitches/react';

export const {
    
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
    styled
    
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
      
      transitions: {
        normal: 'all 400ms ease',
      },
    
      
    },

    media: {
      bp1: '(min-width: 480px)',
      bp2: '(min-width: 768px)',
     bp3: '(min-width: 1024px)',
     bp4: '(min-width: 1440px)',
      bph1: '(min-height: 768px)',
      minHeight: '320px',
     
    },
    
  
  });