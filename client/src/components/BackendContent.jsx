import React from 'react'
import { SplitContent, SplitContentContainer, SplitSectionIntroContent, SectionTitle, SectionIntro, SplitCardContainer, SplitCard, SplitCardImg, SplitCardTitle, SplitCardContent } from './Atoms.jsx'

const BackendContent = () => {
  return(
    <SplitContent>
      <SplitContentContainer>
        <SplitSectionIntroContent align="left">
          <SectionTitle color="#F0F4F8">Backend Development & Dev Ops</SectionTitle>
          <SectionIntro>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</SectionIntro>
        </SplitSectionIntroContent>
        <SplitCardContainer>
          <SplitCard>
            <SplitCardImg />
            <SplitCardTitle>Backend Technologies</SplitCardTitle>
            <SplitCardContent>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SplitCardContent>
          </SplitCard>
          <SplitCard>
            <SplitCardImg />
            <SplitCardTitle>Dev Ops</SplitCardTitle>
            <SplitCardContent>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SplitCardContent>
          </SplitCard>
        </SplitCardContainer>
      </SplitContentContainer>
    </SplitContent>
  )
}

export default BackendContent
