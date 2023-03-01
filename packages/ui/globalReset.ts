import {  globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    "*": { 
      boxSizing: "border-box",
      margin: '0px',
      padding: '0px',
      "-webkit-tap-highlight-color": 'transparent',
     },
     '@font-face': [
      {
        fontFamily: 'Inter',
        src: 'url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900;&display=swap")',
      },
      // {
      //   fontFamily: 'CustomFont2',
      //   src: 'local("CustomFont2"), url("CustomFont2.woff2")',
      // },
    ],
    "html": {
      width: '100%',
      display: "flex",
      justifyContent: 'center',
      
    },

    "body": {
      fontFamily: 'Inter, sans-serif',
      width: '100%',
      minHeight: '100vh',
      height: 'max-content',
      // border: '10px solid black',
      display: 'flex',
      maxWidth: "1800px",
      
    },

    "#__next": {
      width: '100%',
      display: 'flex',
      
    }
  });