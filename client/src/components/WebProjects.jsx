import React from 'react'
import { ContentContainer, ContentSection, ProjectsContainer, ProjectCard, ProjectImage, ProjectInfo, ProjectButton } from './atoms'
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

  return (
    <ContentContainer>
      <ContentSection bottom={false}>
      <h2>Web Projects</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis. Eu augue ut lectus arcu bibendum. Orci porta non pulvinar neque laoreet. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. </p>
      </ContentSection>
      <ContentSection bottom={true}>
        <ProjectsContainer>
          <ProjectCard>
            <ProjectImage src={forrest} />
            <ProjectInfo>
              <h3>mywta</h3>
              <p className="project-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis.</p>
              <ProjectButton><img src={preview} /> <span style={{marginLeft: '8px'}}>Live Example</span></ProjectButton>
              <ProjectButton><img src={github} /> <span style={{marginLeft: '8px'}}>GitHub Repo</span></ProjectButton>
            </ProjectInfo>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src={reddit} />
            <ProjectInfo>
              <h3>Reddit Aggregator</h3>
              <p className="project-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis.</p>
              <ProjectButton><img src={preview} /> <span style={{marginLeft: '8px'}}>Live Example</span></ProjectButton>
              <ProjectButton><img src={github} /> <span style={{marginLeft: '8px'}}>GitHub Repo</span></ProjectButton>
            </ProjectInfo>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src={storage} />
            <ProjectInfo>
              <h3>Cloud Storage</h3>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis.
          <ProjectButton><img src={preview} /> <span style={{marginLeft: '8px'}}>Live Example</span></ProjectButton>
          <ProjectButton><img src={github} /> <span style={{marginLeft: '8px'}}>GitHub Repo</span></ProjectButton>
            </ProjectInfo>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src={forrest} />
            <ProjectInfo>
              <h3>Portfolio of Dustin Williams</h3>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis.
            </ProjectInfo>
          </ProjectCard>


        </ProjectsContainer>
      </ContentSection>
    </ContentContainer>
  )
}

export default WebProjects
