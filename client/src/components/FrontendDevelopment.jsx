import React from 'react'
import { Section, SectionBorder, ContentContainer, SectionIntroContent, SectionTitle, SectionInro } from './Atoms.jsx'
import FrontendCards from './FrontendCards.jsx'

const FrontendDevelopment = () => {
  return(
    <Section color="#F0F4F8">
      <SectionBorder />
      <ContentContainer>
        <SectionIntroContent>
          <SectionTitle>Frontend Development</SectionTitle>
          <SectionInro>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</SectionInro>
        </SectionIntroContent>
        <FrontendCards />
      </ContentContainer>
    </Section>
  )
}

export default FrontendDevelopment
