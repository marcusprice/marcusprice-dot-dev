import React from 'react'
import { HeaderContainer, Nav, NavLinks, NavItem } from './atoms'

const Header = (props) => {
  //updates section in parent component
  const handleClick = (item) => {
    props.toggleSection(item)
  }

  //determines if the current nav item is selected and adds "selected" to the class name if so
  const classHelper = (item) => {
    let output
    if(item === props.section) {
      output = 'selected'
    } else {
      output = ''
    }

    return output
  }

  return(
    <HeaderContainer>
      <Nav>
        <h1>Marcus Price</h1>
        <NavLinks>
          <NavItem className={classHelper('About')} onClick={() => {handleClick('About')}}>About</NavItem>
          <NavItem className={classHelper('Web Projects')} onClick={() => {handleClick('Web Projects')}}>Web Projects</NavItem>
          <NavItem className={classHelper('Music/Art')} onClick={() => {handleClick('Music/Art')}}>Music &amp; Visual Art</NavItem>
          <NavItem className={classHelper('Contact')} onClick={() => {handleClick('Contact')}}>Contact</NavItem>
          <NavItem>Resume</NavItem>
        </NavLinks>
      </Nav>

    </HeaderContainer>
  )
}

export default Header
