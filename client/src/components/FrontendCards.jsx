import React from 'react'
import { CardContainer, Card, CardImg, CardTitle, CardContent, CarUl, CardLi, CardLiBullet } from './Atoms.jsx'
import dev from '../img/dev.jpeg'
import clean from '../img/design.jpg'
import seo from '../img/seo.jpg'
import tech from '../img/tech.jpg'
import checkmark from '../assets/icons/checkmark.png'

const FrontendCards = () => {
  return(
    <CardContainer>
      <Card>
        <CardImg src={clean}/>
        <CardTitle>Clean & Consistent Design Patterns</CardTitle>
        <CardContent>
          When developing your product, the number one thing I focus on is your target audience and how they respond to the look and experience of your site or application. I ensure that:
        </CardContent>
        <CarUl>
          <CardLi><CardLiBullet src={checkmark}/>Your UI is uncluttered & consistent</CardLi>
          <CardLi><CardLiBullet src={checkmark}/>The personality and feel of your product is fitting to your target audience</CardLi>
          <CardLi position="bottom"><CardLiBullet src={checkmark}/>Your product is designed responsively to look great on all devices & platforms</CardLi>
        </CarUl>
      </Card>

      <Card>
        <CardImg src={tech}/>
        <CardTitle>Modern Web Technologies</CardTitle>
        <CardContent>
          The amount of time it takes to load a website or application effects your user's interest. Google has reported that 53% of mobile users leave a site that takes longer than three seconds to load.<br /><br /> I constantly research and use the best frontend technologies to keep your user's load time to an ultimate low and experience at a maximum high. Every time I work on a project I:
        </CardContent>
        <CarUl>
          <CardLi><CardLiBullet src={checkmark}/>Optimize all images & assets to make them web-friendly</CardLi>
          <CardLi><CardLiBullet src={checkmark}/>Limit the amount of third-party recources</CardLi>
          <CardLi position="bottom"><CardLiBullet src={checkmark}/>Use minifiers and other technologies to minimize & bundle your application which results in faster load times</CardLi>
        </CarUl>
      </Card>

      <Card>
        <CardImg src={seo}/>
        <CardTitle>SEO & Social Media Integration</CardTitle>
        <CardContent>
          Both search engine ranking and social media appearance of your product has a big impact on how many new users you bring to your site. I build with that in mind and make sure that:
        </CardContent>
        <CarUl>
          <CardLi><CardLiBullet src={checkmark}/>Your frontend is built semantically and can be recognized by search engine bots</CardLi>
          <CardLi><CardLiBullet src={checkmark}/>The site is fully accessible and works properly on screen-readers and other assistive technologies</CardLi>
          <CardLi position="bottom"><CardLiBullet src={checkmark}/>Your product looks attractive when shared on social media platforms like Facebook, Twitter, Reddit, etc.</CardLi>
        </CarUl>
      </Card>
    </CardContainer>
  )
}

export default FrontendCards
