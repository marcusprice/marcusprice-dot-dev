import React from 'react'
import { ContentContainer, ContentSection, ExternalLinkContainer, ExternalLink } from './atoms'
import github from '../assets/icons/github.svg'
import linkedIn from '../assets/icons/linkedin.svg'
import soundcloud from '../assets/icons/soundcloud.svg'
import bandcamp from '../assets/icons/bandcamp.svg'

const Contact = () => {
  return(
    <ContentContainer>
      <ContentSection bottom={false}>
        <h2>Contact</h2>
        <p>Get in touch if you think I would be a good fit to your team or if you need a developer for your project. The easiest way to reach me is by email: <a href="mailto:marcusprice88@gmail.com"><span className="bold">marcusprice88@gmail.com</span></a></p>
      </ContentSection>
      <ContentSection bottom={false}>
        <h2>RSS Feed</h2>
        <p>I update my RSS feed with new information about projects I am working on (both web & audio). Subscribe <a href="/rss.xml"><span className="bold">here</span></a> if you would like to follow along.</p>
      </ContentSection>
      <ContentSection bottom={true}>
        <h2>External Links</h2>
        <ExternalLinkContainer>
          <ExternalLink><a href="https://github.com/marcusprice" target="_blank" rel="noopener noreferrer"><img src={github} alt="github icon"/></a></ExternalLink>
          <ExternalLink><a href="https://www.linkedin.com/in/marcus-price/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="linkedin icon"/></a></ExternalLink>
          <ExternalLink><a href="https://soundcloud.com/marcus_price" target="_blank" rel="noopener noreferrer"><img src={soundcloud} alt="soundcloud icon"/></a></ExternalLink>
          <ExternalLink><a href="https://marcusprice.bandcamp.com/" target="_blank" rel="noopener noreferrer"><img src={bandcamp} alt="bandcamp icon"/></a></ExternalLink>
        </ExternalLinkContainer>
      </ContentSection>
    </ContentContainer>
  )
}

export default Contact
