import styled, { keyframes } from 'styled-components'
import portrait from '../assets/img/portrait-filler.jpg'
import { fadeIn, fadeInUp } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

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

export const ProjectsContentContainer = styled.div`
  width: 100%;
  padding: 0;
  max-width: 1024px;
  min-height: calc(100vh + 300px);
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

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 64px;
`

export const ProjectCardContainer = styled.div`
  animation: 1s ${fadeInUpAnimation};
  background: #eee;
  -webkit-box-shadow: 0px 7px 12px 5px rgba(0,0,0,0.21);
  -moz-box-shadow: 0px 7px 12px 5px rgba(0,0,0,0.21);
  box-shadow: 0px 7px 12px 5px rgba(0,0,0,0.21);
  border-radius: 15px;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-position: ${props => {return (props.dustin ? 'right top' : 'center center')}};
`

export const ProjectInfo = styled.div`
  width: 100%;
  height: calc(100% - 250px);
  border-top: none;
  padding: 16px;
  border-top: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProjectTechUsed = styled.ul`
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  margin-left: 16px;
  text-decoration: none;
`

export const ProjectTechItem = styled.li`
  font-size: 16px;
  margin-bottom: 4px;
  color: #666;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: left;
`

export const ProjectButtonContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProjectButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin: 16px auto 0 auto;
  border-radius: 10px;
  border: none;
  background: #333;
  color: #fff;
  padding: 8px 16px;
`
