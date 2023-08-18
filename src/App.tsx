import prepPortalLogo from './assets/logo.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://prepportal.in" target="_blank">
          <img src={prepPortalLogo} className="logo" alt="Vite logo" width='500px' height='500px'/>
        </a>
      </div>
      <h1>PrepPortal</h1>
      <div className="card">
        <p>
        Elevating Learning, Enriching Futures.
        </p>
      </div>
    </>
  )
}

export default App
