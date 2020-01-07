import React from 'react'
import ProjectCard from './ProjectCard'
import { ContentContainer, ContentSection, ProjectsContainer } from './atoms'
import forrest from '../assets/img/forrest.jpg'
import reddit from '../assets/img/reddit.jpg'
import storage from '../assets/img/storage.jpg'
import dustin from '../assets/img/dustin.jpg'

const WebProjects = () => {
  let projects = [
    {
      title: 'mywta',
      image: forrest,
      description: 'mywta is a hiking app built off scraped data from the Washington Trails Asscociation. The UI is built around the Google Maps JavaScript API and users can find hikes within a certain range of their location.',
      techUsed: ['Node.js/Express', 'React', 'Google Maps JavaScript API & Geolocation', 'PostgreSQL', 'Request-Promise + Cheerio (web scraping)']
    },

    {
      title: 'Reddit Aggregator',
      image: reddit,
      description: 'Reddit Aggregator collects the top reddit posts hourly so interesting posts don\'t get buried.',
      techUsed: ['Node.js/Express', 'Snoowrap (Reddit API)', 'React', 'React-Bootstrap', 'cron', 'PostgreSQL', 'Mocha.js & Chai.js (testing)'],
    },

    {
      title: 'Cloud Storage',
      image: storage,
      description: 'Much like it sounds, Cloud Storage is a file storage app where users can upload & manage their files. It\'s designed to be easily deployable on a web server.',
      techUsed: ['Node.js/Express', 'React', 'Google Maps JavaScript API', 'Geolocation', 'PostgreSQL', 'Request-Promise + Cheerio (Web Scraping)']
    },

    {
      title: 'Portfolio of Dustin Williams',
      image: dustin,
      description: 'This is a portfolio site I built for Dustin Williams, a Seattle-based sound engineer.',
      techUsed: ['Node.js/Express', 'React', 'Google Maps JavaScript API', 'Geolocation', 'PostgreSQL', 'Request-Promise + Cheerio (Web Scraping)'],
      dustin: true
    }
  ]

  const distributeProjects = () => {
    const items = projects.map((project, index) => {
      return <ProjectCard
        key={index}
        imageSource={project.image}
        title={project.title}
        description={project.description}
        techUsed={project.techUsed}
        dustin={project.dustin}
        wait={index * 250} />
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
