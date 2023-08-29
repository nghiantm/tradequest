import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif', // Montserrat as the primary font
    h3: {
      fontSize: '2rem', 
      fontWeight: 500
    },
    body: {
      fontsize: '1.5rem',
      fontWeight: 400
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
