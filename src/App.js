import Home from './Pages/Home.jsx'
import { Routes, Route } from "react-router-dom"
import Signup from './Components/Signup'
import Login from './Components/Login'
import Contact from './Components/Contact'
import StartF from './Components/StartF'
// import ErrorPage from './Components/Errorpage'

import About from './Pages/About'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TandC from './Pages/TandC.jsx'
import Disclaimer from './Pages/Disclaimer'
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="start-fundraising" element={ <StartF/> } />

        <Route path="about" element={ <About/> } />
        <Route path="privacy-policy" element={ <PrivacyPolicy/> } />
        <Route path="term-and-conditions" element={ <TandC/> } />
        <Route path="disclaimer" element={ <Disclaimer/> } />
      </Routes>
    </>
  );
}

export default App;
