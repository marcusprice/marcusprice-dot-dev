import styled from 'styled-components'
import dev from '../img/dev.jpeg'

export const AppContainer = styled.div`
  width: 100%; height: 100%;
`

/*temp landing page*/
export const LandingContainer = styled.div`
  width: 100%; height: 100%;
  display: flex;
  justify-contents: center;
  align-items: center;
`

export const LandingContentContainer = styled.div`
  width: 768px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LandingInfo = styled.section`
  width: 48%;
`

export const SiteTitle = styled.h1`
  margin: 0; padding: 0;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 4px;
  color: #333;
`

export const SiteQuote = styled.span`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 20px;
`

export const LandingParagraph = styled.p`
  margin: 0; padding: 0;
  margin-top: 8px;
  line-height: 1.5;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  color: #444;
`

export const LandingImg = styled.div`
  width: 48%;
  padding-top: 48%;
  border-radius: 50%;
  background-image: url(${dev});
  background-position: center center;
  background-size: cover;
`

/*section styles*/

export const Section = styled.section`
  width: 100%; min-height: 100%;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
`

export const SectionBorder = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  background-image: linear-gradient(141deg, #51279B, #F86A6A)
`

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 96%;
  z-index: 1;
  margin-top: 32px;
  margin-bottom: 32px;
`

export const SectionIntroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 32px;
  padding-top: 0;
`

export const SectionTitle = styled.h2`
  margin: 0; padding: 0;
  padding: 0;
  font-family: 'Montserrat', helvetica;
  font-weight: 700;
  margin-bottom: 8px;
  font-size: 30px;
  color: #F0F4F8;
`

export const SectionInro = styled.p`
  line-height: 1.5;
  margin: 0; padding: 0;
  font-family: 'Montserrat', helvetica;
  font-size: 16px;
  font-weight: 400;
  color: #F0F4F8;
`

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 16px;
  }

  @media (max-width: 800px) {
    width: 60%;
    margin: 0 auto;
    display: block;
  }
`

export const Card = styled.div`
  width: 32%;
  border: solid #BCCCDC 2px;
  border-radius: 15px;
  padding: 16px;
  background-color: #F0F4F8;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 16px;
  }

  @media (max-width: 800px) {
    margin-bottom: 64px;
    width: 100%;
  }
`

export const CardImg = styled.div`
  width: 40%;
  padding-top: 40%;
  border-radius: 50%;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  margin: 0 auto;
  margin-bottom: 32px;
`

export const CardTitle = styled.h3`
  margin: 0; padding: 0;
  margin-bottom: 16px;
  font-family: 'Montserrat', helvetica;
  font-size: 18px;
  font-weight: 700;
  color: #243B53;
`

export const CardContent = styled.p`
  line-height: 1.5;
  margin: 0; padding: 0;
  font-family: 'Montserrat', helvetica;
  font-size: 14px;
  color: #334E68;
`

export const CarUl = styled.ul`
  padding-left: 8px;
  margin: 16px 0;
  margin-bottom: 0;
`

export const CardLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.position === 'bottom') ? '0' : '32px'};
  font-family: 'Montserrat', helvetica;
  font-size: 14px;
  color: #334E68;
`

export const CardLiBullet = styled.img`
  margin-right: 8px;
`
