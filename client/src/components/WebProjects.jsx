import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectsContentContainer, ContentSection, ProjectsContainer } from './atoms'
import forrest from '../assets/img/forrest-min.jpg'
import reddit from '../assets/img/reddit-min.jpg'
import storage from '../assets/img/storage-min.jpg'
import dustin from '../assets/img/dustin-min.jpg'

const WebProjects = () => {
  let projects = [
    {
      title: 'mywta',
      image: forrest,
      description: 'mywta is a hiking app built off scraped data from the Washington Trails Asscociation website. The UI is developed around the Google Maps JavaScript API and users can find hikes within a certain range of their location.',
      techUsed: ['Node.js/Express', 'React', 'PostgreSQL', 'Google Maps JS API', 'Geolocation', 'Request-Promise'],
      githubURL: 'https://github.com/marcusprice/mywta'
    },

    {
      title: 'Reddit Aggregator',
      image: reddit,
      description: 'Reddit Aggregator collects the top reddit submissions of the hour so interesting posts don\'t get buried.',
      techUsed: ['Node.js/Express', 'React', 'PostgreSQL', 'React-Bootstrap', 'Snoowrap (Reddit API)', 'cron'],
      githubURL: 'https://github.com/marcusprice/reddit-aggregator'
    },

    {
      title: 'Cloud Storage',
      image: storage,
      description: 'Much like it sounds, Cloud Storage is a file storage app where users can upload & manage their files. It\'s designed to be easily deployable on a web server.',
      techUsed: ['Node.js/Express', 'React', 'PostgreSQL', 'Sequelize ORM', 'Busboy', 'Passport.js'],
      githubURL: 'https://github.com/marcusprice/cloud-storage'
    },

    {
      title: 'Portfolio of Dustin Williams',
      image: dustin,
      description: 'This is a portfolio site I built for Dustin Williams, a Seattle-based sound engineer.',
      techUsed: ['Node.js/Express', 'React', 'Nodemailer', 'Styled Components', 'HTML', 'CSS'],
      githubURL: 'https://github.com/marcusprice/dw-portfolio',
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
        githubURL={project.githubURL}
        dustin={project.dustin}
        wait={index * 250} />
    })

    return items
  }

  return (
    <ProjectsContentContainer>
      <ContentSection bottom={false}>
      <h2>Web Projects</h2>
      <p>I love building robust & secure backend environments as well as minimal & user-friendly interfaces for web applications. I take pride in the work I do, please take a look.</p>
      </ContentSection>
      <ContentSection bottom={true}>
        <ProjectsContainer>

          {distributeProjects()}

        </ProjectsContainer>
      </ContentSection>
    </ProjectsContentContainer>
  )
}

export default WebProjects
