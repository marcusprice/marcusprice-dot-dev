import React from 'react'
import ProjectCard from './ProjectCard'
import { ContentContainer, ContentSection, ProjectsContainer, ProjectImage, ProjectInfo, ProjectButton } from './atoms'
import forrest from '../assets/img/forrest.jpg'
import reddit from '../assets/img/reddit.jpg'
import storage from '../assets/img/storage.jpg'
import github from '../assets/icons/github.png'
import preview from '../assets/icons/preview.png'

const WebProjects = () => {
  let projects = [
    {
      title: 'mywta',
      image: forrest
    },

    {
      title: 'Reddit Aggregator',
      image: reddit
    },

    {
      title: 'Cloud Storage',
      image: storage
    },

    {
      title: 'Portfolio of Dustin Williams',
      image: forrest
    }
  ]

  const distributeProjects = () => {
    const items = projects.map((project, index) => {
      return <ProjectCard imageSource={project.image} title={project.title} wait={index * 250} />
    })

    return items
  }

  return (
    <ContentContainer>
      <ContentSection bottom={false}>
      <h2>Web Projects</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis. Eu augue ut lectus arcu bibendum. Orci porta non pulvinar neque laoreet. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. </p>
      </ContentSection>
      <ContentSection bottom={true}>
        <ProjectsContainer>

          {distributeProjects()}

        </ProjectsContainer>
      </ContentSection>
    </ContentContainer>
  )
}

export default WebProjects
