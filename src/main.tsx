//helps catch potential problems in React
import { StrictMode } from 'react'

//how to kick off a React app in modern versions
import { createRoot } from 'react-dom/client'

//imports the styles 
import './index.css'

//main App component 
import App from './App.tsx'

//grabs the div with id="root" from index.html and tell React to render our app there
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Wrap our entire app in StrictMode to help catch bugs early */}
    <App />
  </StrictMode>,
)
