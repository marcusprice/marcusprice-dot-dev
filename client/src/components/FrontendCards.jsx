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
          When developing your product, the number one thing I focus on is your target audience and how they will respond to the look and experience of your site or application. I ensure that:
        </CardContent>
        <CarUl>
          <CardLi><CardLiBullet src={checkmark}/>Your UI is clean & uncluttered</CardLi>
          <CardLi><CardLiBullet src={checkmark}/>The personailty and feel of your product is fitting for your target audience</CardLi>
          <CardLi position="bottom"><CardLiBullet src={checkmark}/>Your product is designed responsively to look great on all devices & platforms</CardLi>
        </CarUl>
      </Card>

      <Card>
        <CardImg src={seo}/>
        <CardTitle>SEO & Social Media-Minded</CardTitle>
        <CardContent>
          Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Eget mauris pharetra et ultrices neque ornare aenean. <br /><br />
           Quis ipsum suspendisse ultrices gravida dictum fusce. Tortor id aliquet lectus proin nibh nisl. Auctor urna nunc id cursus metus aliquam. Massa enim nec dui nunc mattis enim.
        </CardContent>
      </Card>

      <Card>
        <CardImg src={tech}/>
        <CardTitle>Modern Web Technologies</CardTitle>
        <CardContent>
        Non arcu risus quis varius quam quisque id diam vel. Pellentesque pulvinar pellentesque habitant morbi tristique. Tristique sollicitudin nibh sit amet commodo nulla. Morbi blandit cursus risus at ultrices mi tempus. Feugiat in ante metus dictum at tempor commodo
        </CardContent>
      </Card>

    </CardContainer>
  )
}

export default FrontendCards
