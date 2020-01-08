import React, { useState, useEffect } from 'react'
import { ProjectCardContainer, ProjectImage, ProjectInfo, ProjectTechUsed, ProjectTechItem, ProjectButton, ProjectButtonContainer } from './atoms'
import github from '../assets/icons/github-project.svg'
import preview from '../assets/icons/preview.svg'
import checkmark from '../assets/icons/checkmark.svg'

const ProjectCard = (props) => {
  let [display, setDisplay] = useState('none')

  //trigger once the card is mounted
  useEffect(() => {
    let mounted = true  //intially set card to mounted
    //wait...
    setTimeout(() => {
      //if the card is mounted, set the display to block, thus triggering
      //the animation
      if(mounted) {
        setDisplay('block')
      }
    }, props.wait)

    //once the user navigates away from the projects, set the mounted state
    //to false to prevent the display from being set
    return () => {
      mounted = false
    }
  }, [props.wait])  //<--this useEffect function fires only once

  const distributeTechnologies = () => {
    let technologies = props.techUsed.map((tech, index) => {
      return <ProjectTechItem key={index}><img style={{marginRight: '8px'}} src={checkmark} className="checkmark"/> {tech}</ProjectTechItem>
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
            <h4>Technologies Used</h4>
            <ProjectTechUsed>
              {distributeTechnologies()}
            </ProjectTechUsed>
            <ProjectButtonContainer>
              <ProjectButton><img src={preview} className="project-icon" /> <span style={{marginLeft: '8px'}}>Live Example</span></ProjectButton>
              <a href={props.githubURL} target="_blank" rel="noopener noreferrer"><ProjectButton><img src={github} className="project-icon" /> <span style={{marginLeft: '8px'}}>GitHub Repo</span></ProjectButton></a>
            </ProjectButtonContainer>
          </div>
        </ProjectInfo>
    </ProjectCardContainer>
  )
}

export default ProjectCard
