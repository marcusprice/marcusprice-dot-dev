import React, { useState, useEffect } from 'react'
import { ProjectCardContainer, ProjectImage, ProjectInfo, ProjectButton } from './atoms'
import forrest from '../assets/img/forrest.jpg'
import reddit from '../assets/img/reddit.jpg'
import storage from '../assets/img/storage.jpg'
import github from '../assets/icons/github.png'
import preview from '../assets/icons/preview.png'

const ProjectCard = (props) => {
  let [display, setDisplay] = useState('none')

  setTimeout(() => {
    setDisplay('block')
  }, props.wait)

  return(
    <ProjectCardContainer style={{display: display}}>
      <ProjectImage src={props.imageSource} />
      <ProjectInfo>
        <h3>{props.title}</h3>
        <p className="project-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis.</p>
        <ProjectButton><img src={preview} /> <span style={{marginLeft: '8px'}}>Live Example</span></ProjectButton>
        <ProjectButton><img src={github} /> <span style={{marginLeft: '8px'}}>GitHub Repo</span></ProjectButton>
      </ProjectInfo>
    </ProjectCardContainer>
  )
}

export default ProjectCard
