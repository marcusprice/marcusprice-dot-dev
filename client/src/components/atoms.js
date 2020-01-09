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

  /*scrollbar styles for desktop*/
  @media only screen and (min-width: 824px) {
    ::-webkit-scrollbar {
      background-color:#222;
      width:4px;
      border-radius:16px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color:#222;
      border-radius:16px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color:#babac0;
      border-radius:16px;
      border:4px solid #666
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    ::-webkit-scrollbar-button {
      display:none
    }
  }
`

export const HeaderContainer = styled.header`
  text-align: left;
  width: 100%;
  border-bottom: 1px solid #2ECC71;
  /* border-bottom: 1px solid #aaa; */
  max-width: 1024px;
  margin: 0 auto;
  animation: 2s ${fadeInAnimation};

  @media (max-width: 1024px) {
    width: 95%;
  }
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

  @media (max-width: 610px) {
    display: none;
  }
`

export const NavItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  display: inline-block;
  margin-left: 32px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
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

  @media (max-width: 1024px) {
    width: 95%;
  }
`

export const ProjectsContentContainer = styled.div`
  width: 100%;
  padding: 0;
  max-width: 1024px;
  min-height: calc(100vh + 128px);
  padding-bottom: 128px;
  margin: 0 auto;
  animation: 1s ${fadeInAnimation};

  @media (max-width: 1024px) {
    width: 95%;
  }
`

export const TitleContainer = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

export const HeadingContainer = styled.div`
  width: 50%;

  @media (max-width: 1024px) {
    order: 2;
    width: 100%;
    margin-top: 32px;
  }
`

export const ContentSection = styled.section`
  width: 100%;
  border-bottom: ${props => {return (props.bottom ? 'none' : 'solid #2ECC71 1px')}};
  padding: 32px 0;
`

export const PortraitContainer = styled.div`
  width: 40%;

  @media (max-width: 1024px) {
    order: 1;
    width: 75%;
  }
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

  @media (max-width: 1024px) {
    width: 95%;
  }
`

export const TechStackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 32px;
  width: 100%;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
  }
`

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;

  @media (max-width: 1024px) {
    width: 512px;
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  }

  @media (max-width: 610px) {
    width: 90%;
  }
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
  text-decoration: none;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ProjectTechItem = styled.li`
  font-size: 16px;
  margin-top: 8px;
  color: #666;
  font-weight: 300;
  width: 50%;
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

export const CTAButton = styled.button`
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin: 16px 0 0 0;
  border-radius: 10px;
  border: none;
  /* background: #333; */
  background: #2ECC71;
  color: #fff;
  padding: 8px 16px;
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
  margin: 16px 0 0 0;
  border-radius: 10px;
  border: none;
  /* background: #333; */
  background: #2ECC71;
  color: #eee;
  padding: 8px 16px;
`

export const ExternalLinkContainer = styled.ul`
  list-style-type: none;
`

export const ExternalLink = styled. li`
  display: inline-block;
  margin-right: 64px;
`
