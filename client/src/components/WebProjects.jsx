import React from 'react'
import { ContentContainer, ContentSection, ProjectsContainer, ProjectCard, ProjectImage, ProjectInfo } from './atoms'
import fillerImg from '../assets/img/portrait-filler.jpg'

const WebProjects = () => {
  return (
    <ContentContainer>
      <ContentSection bottom={false}>
      <h2>Web Projects</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis. Eu augue ut lectus arcu bibendum. Orci porta non pulvinar neque laoreet. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. </p>
      </ContentSection>
      <ContentSection bottom={true}>
        <ProjectsContainer>
          <ProjectCard>
            <ProjectImage src={fillerImg} />
            <ProjectInfo>
              <h3>mywta</h3>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis.
            </ProjectInfo>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src={fillerImg} />
            <ProjectInfo>
              <h3>Reddit Aggregator</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis.</p>
            </ProjectInfo>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src={fillerImg} />
            <ProjectInfo>
              <h3>mywta</h3>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis.
            </ProjectInfo>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src={fillerImg} />
            <ProjectInfo>
              <h3>mywta</h3>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Gravida rutrum quisque non tellus orci. Tristique magna sit amet purus gravida quis.
            </ProjectInfo>
          </ProjectCard>


        </ProjectsContainer>
      </ContentSection>
    </ContentContainer>
  )
}

export default WebProjects
