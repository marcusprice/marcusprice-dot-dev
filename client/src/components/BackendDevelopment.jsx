import React from 'react'
import { SplitSection, SplitContent, SplitImg } from './Atoms.jsx'
import BackendContent from './BackendContent.jsx'

const BackendDevelopment = () => {
  return(
    <SplitSection>
      <BackendContent />
      <SplitImg />
    </SplitSection>
  )
}

export default BackendDevelopment
