import React, { useState } from 'react';
import { AppContainer } from './components/atoms'
import Header from './components/Header'
import About from './components/About'
import WebProjects from './components/WebProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css';

const App = () => {
  //state for selected section
  let [selectedSection, setSelectedSection] = useState('About')

  const sectionHelper = () => {
    let output
    switch(selectedSection) {
      case 'About':
        output = <About />
        break;
      case 'Web Projects':
        output = <WebProjects />
        break;
      case 'Contact':
        output = <Contact />
        break
      default:
        output = <About />
        break;
    }

    return output
  }

  const toggleSection = (section) => {
    document.title = 'Marcus Price - ' + section
    setSelectedSection(section)
  }

  return(
    <AppContainer>
        <Header section={ selectedSection } toggleSection={ toggleSection }/>
        { sectionHelper() }
        <Footer />
    </AppContainer>
  )
}

export default App;
