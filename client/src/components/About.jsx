import React from 'react'
import { ContentContainer, TitleContainer, ContentSection, HeadingContainer, ProjectButton, PortraitContainer, PortraitHelper } from './atoms'
import TechStack from './TechStack'
import email from '../assets/icons/email.png'

const About = () => {
  return (
    <ContentContainer>
      <TitleContainer>
        <HeadingContainer>
          <h2>I'm <span className="bold">Marcus Price</span> - a full stack software developer based out of Seattle, WA</h2>
          <a href="mailto:marcusprice88@gmail.com"><ProjectButton>Get in Touch</ProjectButton></a>
        </HeadingContainer>
        <PortraitContainer>
          <PortraitHelper />
        </PortraitContainer>
      </TitleContainer>
      <ContentSection bottom={false}>
        <p>
        Although I officially began studying web development at Seattle Central College in 2017, I discovered my passion for programming through creating generative music. Delving into my creative intuition and inclination toward technology, I discovered the visual audio programming language Max/MSP. With Max I learned to synthesize audio programmatically and develop algorithmic compositions. Within a few years I had put out a few records and built a following that loved my music and methodology. <br /><br />
        Programming music organically evolved into an exploration on how to create tools to help myself and others. From here I taught myself some basic HTML, CSS & JavaScript and decided I want to pursue a career in web development. Between school and self-learning, I have worked on many awesome projects. Because I pour my intersectional skills of creativity and technology into what I do, the projects you will see in my portfolio mirror my values.
        </p>
      </ContentSection>
      <ContentSection bottom={true}>
        <h2>Technology Stack</h2>
        <p>While learning any language, framework, library or database is no problem, my favorite technology stack to work with is:</p>
        <TechStack />
      </ContentSection>
    </ContentContainer>
  )
}

export default About
