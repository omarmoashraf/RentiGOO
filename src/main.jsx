import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './HOOKS/UseLogged.jsx';







createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
   <AuthProvider>
    <ThemeProvider>
      
        <App />
      
    </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
)
