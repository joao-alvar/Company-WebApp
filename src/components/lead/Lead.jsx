import React from 'react'
import LazyImage from '../LazyLoadImage/LazyImage'
import {Container, LeadInformation, LeadSection} from './LeadElements'
import {Link} from 'react-router-dom'

const Lead = () => {
  return (
    <>
      <LeadSection id="lead">
        <Container>
          <LeadInformation>
            <h2>Lorem ipsum, dolor sit amet</h2>
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At odit
              culpa molestias pariatur esse itaque soluta quaerat eligendi Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. At odit culpa
              molestias pariatur esse itaque soluta quaerat eligendi
            </h3>
            <Link>
              <button>Get Started</button>
            </Link>
          </LeadInformation>
        </Container>
      </LeadSection>
    </>
  )
}

export default Lead
