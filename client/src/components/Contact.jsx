import React from 'react'
import { ContentContainer, ContentSection } from './atoms'

const Contact = () => {
  return(
    <ContentContainer>
      <ContentSection bottom={false}>
        <h2>Contact</h2>
        <p>Get in touch if you think I would be a good fit to your team or if you need a developer for your project. The easiest way to reach me is by email: <a href="mailto:marcusprice88@gmail.com"><span className="bold">marcusprice88@gmail.com</span></a></p>
      </ContentSection>
      <ContentSection bottom={false}>
        <h2>RSS</h2>
        <p>I update my RSS feed with new information about projects I am working on (both web & audio). If you're interested in following along, subscribe <a href="/rss.xml"><span className="bold">here</span></a></p>
      </ContentSection>
      <ContentSection bottom={true}>
        <h2>External Links</h2>
      </ContentSection>
    </ContentContainer>
  )
}

export default Contact
