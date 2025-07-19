import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { PodcastProvider } from './context/PodcastContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PodcastProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </PodcastProvider>
    </BrowserRouter>
  </StrictMode>,
)
