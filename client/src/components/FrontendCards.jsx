import React from 'react'
import { CardContainer, Card, CardImg, CardTitle, CardContent } from './Atoms.jsx'
import dev from '../img/dev.jpeg'
import clean from '../img/design.jpg'
import seo from '../img/seo.jpg'
import tech from '../img/tech.jpg'

const FrontendCards = () => {
  return(
    <CardContainer>
      <Card>
        <CardImg src={clean}/>
        <CardTitle>Clean & Consistent Design Patterns</CardTitle>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis. Posuere urna nec tincidunt praesent. <br /><br /> Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Laoreet non curabitur gravida arcu ac tortor dignissim.
        </CardContent>
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
