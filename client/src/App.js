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
          <MarketingParagraph>For now, you can visit Marcus' <a href="https://www.linkedin.com/in/marcus-price/" target="_blank" rel="noopener noreferrer" style={{color: '#000'}}>LinkedIn</a> for more info. For inquiries, please email <a href="mailto:marcusprice88@gmail.com" style={{color: '#000'}}>marcusprice88@gmail.com</a>.

          </MarketingParagraph>
        </MarketingInfo>

      <MarketingImg />

      </MarketingContainer>
    </AppContainer>
  )
}

export default App
