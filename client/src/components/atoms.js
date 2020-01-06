import styled, { keyframes } from 'styled-components'
import portrait from '../assets/img/portrait-filler.jpg'
import { fadeIn } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`;

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  position: relative;
`

export const HeaderContainer = styled.header`
  text-align: left;
  width: 100%;
  border-bottom: 1px solid #aaa;
  max-width: 1024px;
  margin: 0 auto;
  animation: 2s ${fadeInAnimation};
`

export const Nav = styled.nav`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavLinks = styled.ul`
  margin: 0; padding: 0;
  color: #999;
`

export const NavItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  display: inline-block;
  margin-left: 32px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
`

export const NavItemRight = styled.li`
  cursor: pointer;
  list-style-type: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
`

export const ContentContainer = styled.div`
  width: 100%;
  padding: 0;
  max-width: 1024px;
  margin: 0 auto;
  padding-bottom: 128px;
  animation: 1s ${fadeInAnimation};
`

export const TitleContainer = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeadingContainer = styled.div`
  width: 50%;
`

export const ContentSection = styled.section`
  width: 100%;
  border-bottom: ${props => {return (props.bottom ? 'none' : 'solid #aaa 1px')}};
  padding: 32px 0;
`

export const PortraitContainer = styled.div`
  width: 40%;
`
export const PortraitHelper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 100%;
  background-image: url(${portrait});
  background-size: cover;
  background-position: center center;
`

export const FooterContainer = styled.footer`
  height: 128px;
  width: 100%;
  background: #333;
  position: absolute;
  bottom: 0;
`

export const FooterNav = styled.nav`
  max-width: 1024px;
  color: #fff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: left;
  height: 100%;
`

export const TechStackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
`
