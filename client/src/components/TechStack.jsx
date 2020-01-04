import React from 'react'
import { TechStackContainer } from './atoms'
import ubuntu from '../assets/icons/ubuntu.svg'
import node from '../assets/icons/nodejs.svg'
import express from '../assets/icons/expressjs.svg'
import react from '../assets/icons/reactjs.svg'
import postgresql from '../assets/icons/postgresql.svg'
import sequelize from '../assets/icons/sequelizejs.svg'

const TechStack = () => {
  return(
    <TechStackContainer className="techStackContainer">
      <img src={ubuntu} alty="tech icon" alt="ubuntu icon"/>
      <img src={node} alty="tech icon" alt="nodejs icon"/>
      <img src={express} alty="tech icon" alt="express icon"/>
      <img src={react} alty="tech icon" alt="react icon"/>
      <img src={postgresql} alty="tech icon" alt="postgresql icon"/>
      <img src={sequelize} alty="tech icon" alt="sequelize icon"/>
    </TechStackContainer>
  )
}

export default TechStack
