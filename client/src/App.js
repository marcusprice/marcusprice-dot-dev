import React from 'react';
import './App.css';
import { AppContainer, MarketingContainer, MarketingInfo, SiteTitle, SiteQuote, MarketingParagraph, MarketingImg } from './components/Atoms'

const App = () => {
  return (
    <AppContainer>
      <MarketingContainer>
        <MarketingInfo>
          <SiteTitle>Coming Soon!</SiteTitle>
          <SiteQuote>Stay tuned for the portfolio of Marcus Price.</SiteQuote>
          <MarketingParagraph>For now, you can visit Marcus' <a href="https://www.linkedin.com/in/marcus-price/" target="_blank" rel="noopener noreferrer" style={{color: '#000'}}>linkedin</a> for more info.</MarketingParagraph>
        </MarketingInfo>

      <MarketingImg />

      </MarketingContainer>
    </AppContainer>
  )
}

export default App
