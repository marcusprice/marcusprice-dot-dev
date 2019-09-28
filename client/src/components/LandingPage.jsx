import React from 'react'
import { LandingContainer, LandingContentContainer, LandingInfo, SiteTitle, SiteQuote, LandingParagraph, LandingImg } from './Atoms'

const LandingPage = () => {
  return (
    <LandingContainer>
      <LandingContentContainer>
        <LandingInfo>
          <SiteTitle>Coming Soon!</SiteTitle>
          <SiteQuote>Stay tuned for the portfolio of Marcus Price.</SiteQuote>
          <LandingParagraph>For now, you can visit Marcus' <a href="https://www.linkedin.com/in/marcus-price/" target="_blank" rel="noopener noreferrer" style={{color: '#000'}}>LinkedIn</a> for more info. For inquiries, please email <a href="mailto:marcusprice88@gmail.com" style={{color: '#000'}}>marcusprice88@gmail.com</a>.
          </LandingParagraph>
        </LandingInfo>

        <LandingImg />
      </LandingContentContainer>
    </LandingContainer>
  )
}

export default LandingPage
