import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store.js'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif', // Montserrat as the primary font
    h2: {
      fontSize: '1.8rem',
      fontWeight: 500
    },
    h3: {
      fontSize: '1.5rem', 
      fontWeight: 500
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 400
    },  
    body: {
      fontsize: '1.25rem',
      fontWeight: 300
    },
  },
  palette: {
    background: {
      default: "#f5f5f7"
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={(store)}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
