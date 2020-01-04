import React from 'react'
import { FooterContainer, FooterNav } from './atoms'

const Footer = () => {
  return(
    <FooterContainer>
      <FooterNav>
        <a href="https://www.github.com/marcusprice" target="_blank" rel="noopener noreferrer"><span>Github</span></a>
        <a href="https://www.linkedin.com/in/marcus-price/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a>
        <a href="mailto:marcusprice88@gmail.com" target="_blank" rel="noopener noreferrer"><span>Email</span></a>
        <a href="https://marcusprice.dev/rss.xml" target="_blank" rel="noopener noreferrer"><span>RSS</span></a>
      </FooterNav>
    </FooterContainer>
  )
}

export default Footer
