import React from 'react'
import { Section, SectionBorder, ContentContainer, SectionIntroContent, SectionTitle, SectionInro } from './Atoms.jsx'
import FrontendCards from './FrontendCards.jsx'

const FrontendDevelopment = () => {
  return(
    <Section color="#F0F4F8">
      <SectionBorder />
      <ContentContainer>
        <SectionIntroContent>
          <SectionTitle>Design & Frontend Development</SectionTitle>
          <SectionInro>The look and experience of your site or app is what shapes your user's impressions and keeps them coming back.</SectionInro>
        </SectionIntroContent>
        <FrontendCards />
      </ContentContainer>
    </Section>
  )
}

export default FrontendDevelopment
