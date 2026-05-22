import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Form.jsx'
import Samples from './Samples.jsx'
import Login from './Login.jsx'

function Main() {
  const [audioData, setAudioData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  if (!isAuthenticated) {
      return <Login onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <div className='layout'>
      <section className='titulo'>
        <h1>RETOMadrID Sintetizador de Texto A Voz por IA</h1>
      </section>

      <div className='sidebar'>
        <Samples audioData={audioData} />
      </div>

      <div className='content'>
        <App />
        <Form setAudioData={setAudioData} />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)