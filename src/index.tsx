import React from 'react'
import ReactDOM from 'react-dom'
import { setup, theme } from 'twind'
import { css } from 'twind/css'
import { App } from './App'

setup({
  preflight: (preflight) => css`
    ${preflight}
    body {
      background-color: ${theme('colors.white')};
    }
    div#root {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: ${theme('fontFamily.roboto')};
    }
  `,
  theme: {
    extend: {
      colors: {
        red: 'D32323',
        black: '000000',
        white: 'FFFFFF',
      },
      fontFamily: {
        roboto: 'Roboto',
      },
    },
    screens: {
      phone: '425px',
      tablet: '768px',
      desktop: '1024px',
      laptop: '1440px',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
