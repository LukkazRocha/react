import React from 'react'
import ReactDOM from 'react-dom/client'
import { Demo } from './Demo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section className="container">
      <h1>Solicite uma desmonstração</h1>
      <h4>Nós te responderemos em até 12h!</h4>
      <Demo />

    </section>
    
  </React.StrictMode>
)
