import React from 'react';
import './App.css';
import { AppContainer } from './components/Atoms'
import LandingPage from './components/LandingPage.jsx'
import FrontendDevelopment from './components/FrontendDevelopment.jsx'

const App = () => {
  return (
    <AppContainer>
      <FrontendDevelopment />
    </AppContainer>
  )
}

export default App
