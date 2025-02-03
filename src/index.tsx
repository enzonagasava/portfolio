import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import reportWebVitals from './reportWebVitals.ts'

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error("Elemento com ID 'root' não encontrado no DOM.")
}
// Comente ou remova as linhas abaixo se não for usar reportWebVitals
// import reportWebVitals from './reportWebVitals';
reportWebVitals(console.log)
