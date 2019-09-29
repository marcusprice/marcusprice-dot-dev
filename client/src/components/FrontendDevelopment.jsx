import React from 'react'
import { Section, SectionBorder, ContentContainer, SectionIntroContent, SectionTitle, SectionIntro } from './Atoms.jsx'
import FrontendCards from './FrontendCards.jsx'

const FrontendDevelopment = () => {
  return(
    <Section color="#F0F4F8">
      <SectionBorder />
      <ContentContainer>
        <SectionIntroContent>
          <SectionTitle>Frontend Development & Design</SectionTitle>
          <SectionIntro>The look and experience of your site or app shapes your user's impressions and keeps them coming back.</SectionIntro>
        </SectionIntroContent>
        <FrontendCards />
      </ContentContainer>
    </Section>
  )
}

export default FrontendDevelopment
