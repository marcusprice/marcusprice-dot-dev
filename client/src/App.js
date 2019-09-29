import React from 'react';
import './App.css';
import { AppContainer } from './components/Atoms'
import LandingPage from './components/LandingPage.jsx'
import FrontendDevelopment from './components/FrontendDevelopment.jsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const App = () => {
  return (
    <AppContainer>
      <PerfectScrollbar>
        <FrontendDevelopment />
      </PerfectScrollbar>
    </AppContainer>
  )
}

export default App
