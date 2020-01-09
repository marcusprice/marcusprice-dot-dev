import React from 'react'
import { HeaderContainer, Nav, NavLinks, NavItem } from './atoms'
import menu from '../assets/icons/menu.svg'

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
        <h1 onClick={() => {handleClick('About')}}>Marcus Price</h1>
        <img src={menu} alt='' />
        <NavLinks>
          <NavItem className={classHelper('About')} onClick={() => {handleClick('About')}}>About</NavItem>
          <NavItem className={classHelper('Projects')} onClick={() => {handleClick('Projects')}}>Projects</NavItem>
          <NavItem className={classHelper('Contact')} onClick={() => {handleClick('Contact')}}>Contact</NavItem>
          <NavItem><a className="resume-link" href="Marcus-Price-Resume.pdf" download>Résumé</a></NavItem>
        </NavLinks>
      </Nav>

    </HeaderContainer>
  )
}

export default Header
