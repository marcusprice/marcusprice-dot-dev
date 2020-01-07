import React, { useState, useEffect } from 'react'
import { ProjectCardContainer, ProjectImage, ProjectInfo, ProjectTechUsed, ProjectTechItem, ProjectButton, ProjectButtonContainer } from './atoms'
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

  const distributeTechnologies = () => {
    let technologies = props.techUsed.map((tech, index) => {
      return <ProjectTechItem key={index}>{tech}</ProjectTechItem>
    })

    return technologies
  }

  return(
    <ProjectCardContainer style={{display: display}}>
        <ProjectImage src={props.imageSource} dustin={props.dustin}/>
        <ProjectInfo>
          <div>
            <h3>{props.title}</h3>
            <p className="project-paragraph">{props.description}</p>
            <ProjectTechUsed>

            </ProjectTechUsed>
            <ProjectButtonContainer>
              <ProjectButton><img src={preview} /> <span style={{marginLeft: '8px'}}>Live Example</span></ProjectButton>
              <ProjectButton><img src={github} /> <span style={{marginLeft: '8px'}}>GitHub Repo</span></ProjectButton>
            </ProjectButtonContainer>
          </div>
        </ProjectInfo>
    </ProjectCardContainer>
  )
}

export default ProjectCard
