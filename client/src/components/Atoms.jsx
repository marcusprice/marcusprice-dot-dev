import styled from 'styled-components'
import dev from '../img/dev.jpeg'

export const AppContainer = styled.div`
  width: 100%; height: 100%;
  display: flex;
  justify-contents: center;
  align-items: center;
`
export const MarketingContainer = styled.div`
  width: 768px;
  /* border: solid gray 1px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MarketingInfo = styled.section`
  width: 48%;
`

export const SiteTitle = styled.h1`
  margin: 0; padding: 0;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 4px;
`

export const SiteQuote = styled.span`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
`

export const MarketingParagraph = styled.p`
  margin: 0; padding: 0;
  margin-top: 16px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  color: #555;
`

export const MarketingImg = styled.div`
  width: 48%;
  padding-top: 48%;
  border-radius: 50%;
  background-image: url(${dev});
  background-position: center center;
  background-size: cover;
`
