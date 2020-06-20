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
      description: 'mywta is a trail finder application and api built off scraped data from the Washington Trails Asscociation (WTA) website. The UI is developed around the Google Maps JavaScript api and users can find hikes within a chosen range of their location. \n\nI built this application because the WTA website is somewhat clunky in terms of user experience. I also noticed that the WTA has no api for their trail data and I was interested in learning more about web scraping.',
      techUsed: ['Node.js/Express', 'React', 'PostgreSQL', 'Google Maps JS API', 'Geolocation', 'Cheerio'],
      previewURL: 'https://mywta.glitch.me',
      githubURL: 'https://github.com/marcusprice/mywta'
    },

    {
      title: 'Reddit Aggregator',
      image: reddit,
      description: 'Reddit Aggregator is an application that collects the top hourly posts of your favorite subreddits on reddit. It uses a combination of cron, the snoowrap reddit api & PostgreSQL to collect and save the top reddit submissions each hour.\n \nI realized that a lot of great reddit submissions get buried throughout the day, so for my capstone project class I took the opportunity to mitigate this problem.',
      techUsed: ['Node.js/Express', 'React', 'PostgreSQL', 'React-Bootstrap', 'Snoowrap (Reddit API)', 'cron'],
      previewURL: 'https://marcusprice.github.io/coming-soon-template/',
      githubURL: 'https://github.com/marcusprice/reddit-aggregator'
    },

    {
      title: 'Cloud Storage',
      image: storage,
      description: 'Much like it sounds, Cloud Storage is a file storage app where users can upload & manage their files. It\'s designed to be easily deployable on a web server.',
      techUsed: ['Node.js/Express', 'React', 'PostgreSQL', 'Sequelize ORM', 'Busboy', 'Passport.js'],
      previewURL: 'https://marcusprice.github.io/coming-soon-template/',
      githubURL: 'https://github.com/marcusprice/cloud-storage'
    },

    {
      title: 'Portfolio of Dustin Williams',
      image: dustin,
      description: 'This is a portfolio site I built for Dustin Williams, a Seattle-based sound engineer. After learning Wordpress, I started looking for a good CMS solution for SPA-type applications and found Strapi, an open source headless CMS.',
      techUsed: ['Strapi', 'React', 'Nodemailer', 'Styled Components', 'HTML', 'CSS'],
      previewURL: 'https://marcusprice-dw-portfolio.glitch.me',
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
        previewURL={project.previewURL}
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
      <p>I love building clean and minimal web applications that are effective in solving complicated problems. Here are some applications I've built.</p>
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
