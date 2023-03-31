import React from 'react'
import {
  GraphUpIcon,
  HandsIcon,
  IconContainer,
  IconSvg,
  ImportedIcon,
  LeadFeatureSection,
  LeadFeatureContainer,
  LeadFeatureContent,
} from './LeadFeatureElements'
import Group from '../../assets/images/Group.svg'
import Saving from '../../assets/images/Saving.svg'

const LeadFeature = () => {
  return (
    <div>
      <LeadFeatureSection>
        <LeadFeatureContainer>
          <LeadFeatureContent>
            <ul>
              <li>
                <IconContainer>
                  <HandsIcon />
                </IconContainer>
                <h2>Standout be the difference</h2>
                <p>trustability and expertise is Atalaso's standard</p>
              </li>
              <li>
                <IconContainer>
                  <GraphUpIcon />
                </IconContainer>
                <h2>Standout be the difference</h2>
                <p>trustability and expertise is Atalaso's standard</p>
              </li>
              <li>
                <IconContainer>
                  <IconSvg src={Group} alt="Group icon" />
                </IconContainer>
                <h2>Standout be the difference</h2>
                <p>trustability and expertise is Atalaso's standard</p>
              </li>
              <li>
                <IconContainer>
                  <IconSvg src={Saving} alt="Hand Savings icon" />
                </IconContainer>
                <h2>Standout be the difference</h2>
                <p>trustability and expertise is Atalaso's standard</p>
              </li>
            </ul>
          </LeadFeatureContent>
        </LeadFeatureContainer>
      </LeadFeatureSection>
    </div>
  )
}

export default LeadFeature
