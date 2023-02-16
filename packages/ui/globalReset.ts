import {  globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    "*": { 
      boxSizing: "border-box",
      margin: '0px',
      padding: '0px',
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

    "body": {
      fontFamily: 'Inter, sans-serif',
    }
  });