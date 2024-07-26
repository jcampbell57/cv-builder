import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import chevron_down from '../assets/chevron-down.svg'
import chevron_up from '../assets/chevron-up.svg'
import delete_icon from '../assets/close-thick.svg'
import hidden_icon from '../assets/eye-off-outline.svg'
import visible_icon from '../assets/eye-outline.svg'

function ExperienceFieldset({
  experience,
  setExperience,
}) {

  const [isCollapsed, setIsCollapsed] = useState(() => {
    const collapsedState = localStorage.getItem('experienceCollapsed')
    return collapsedState ? JSON.parse(collapsedState) : true
  })  

  const toggleCollapse = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    localStorage.setItem('experienceCollapsed', JSON.stringify(newState));
  }

  const addExperience = (expIndex) => {
    const updatedExperience = [...experience]
    const newExperience = {
      key: uuidv4(),
      collapsed: false,
      hidden: false,
      employer: '',
      title: '',
      startDate: '',
      endDate: '',
      location: '',
      details: [],
    }
    setExperience([...updatedExperience, newExperience])
  }

  const handleExperienceChange = (expIndex, field, value) => {
    const updatedExperience = [...experience]
    updatedExperience[expIndex][field] = value;
    setExperience(updatedExperience)
    localStorage.setItem('resumeFormExperience', JSON.stringify(updatedExperience))
  }

  const removeExperience = (expIndex) => {
    const updatedExperience = [...experience]
    updatedExperience.splice(expIndex, 1)
    setExperience(updatedExperience)
    localStorage.setItem('resumeFormExperience', JSON.stringify(updatedExperience))
  }

  const addDetail = (expIndex) => {
    const updatedExperience = [...experience]
    const newdetail = {
      key: uuidv4(),
      text: '',
    }
    const details = [...updatedExperience[expIndex].details, newdetail]
    updatedExperience[expIndex].details = details
    setExperience(updatedExperience)
  }

  const handleDetailChange = (expIndex, detailIndex, value) => {
    const updatedExperience = [...experience]
    const details = [...updatedExperience[expIndex].details]
    details[detailIndex].text = value;
    updatedExperience[expIndex].details = details
    setExperience(updatedExperience)
    localStorage.setItem('resumeFormExperience', JSON.stringify(updatedExperience))
  }

  const removeDetail = (expIndex, detailIndex) => {
    const updatedExperience = [...experience]
    const details = [...updatedExperience[expIndex].details]
    details.splice(detailIndex, 1)
    updatedExperience[expIndex].details = details
    setExperience(updatedExperience)
    localStorage.setItem('resumeFormExperience', JSON.stringify(updatedExperience))
  }

  return (
    <fieldset className='mainFieldset'>
      <div className='dropdownContainer' onClick={toggleCollapse}>
        <legend className='fieldsetHeader'>Experience</legend>
        <img src={isCollapsed ? chevron_down : chevron_up}
             alt={isCollapsed ? 'Expand' : 'Collapse'}
             className='chevronIcon'>
        </img>
      </div>
      {!isCollapsed && (
        <>
          <hr className='formSeperator' />
          {experience.map((exp, expIndex) => (
            <React.Fragment key={exp.key}>
              <div className='formSectionHeader'>
                <div className='formSectionTitleContainer' onClick={() => handleExperienceChange(expIndex, 'collapsed', !exp.collapsed)}>
                  <h2 className='formSectionTitle'>{exp.employer.length > 0 ? exp.employer : 'New experience'}</h2>
                  <img src={exp.collapsed ? chevron_down : chevron_up}
                       alt={exp.collapsed ? 'Expand' : 'Collapse'}
                       className='chevronIcon'>
                  </img>
                </div>
                <div className='visibilityIconContainer'
                     onClick={(e) => handleExperienceChange(expIndex, 'hidden', !exp.hidden)}>
                  <img src={exp.hidden ? hidden_icon : visible_icon}
                       alt={exp.hidden ? 'Show' : 'Hide'}
                       className='visibilityIcon'>
                  </img>
                </div>
              </div>
              {!exp.collapsed && (
                <section className='formSection'>
                  <label htmlFor={`${exp.key}employer`} className='flexLabel'>
                    Employer:
                    <input 
                      type="text"
                      name="employer"
                      id={`${exp.key}employer`}
                      placeholder='Netflix'
                      value={exp.employer}
                      onChange={(e) => handleExperienceChange(expIndex, 'employer', e.target.value)}
                    />          
                  </label>
                  <label htmlFor={`${exp.key}title`} className='flexLabel'>
                    Title:
                    <input 
                      type="text"
                      name="title"
                      id={`${exp.key}title`}
                      placeholder='Machine Learning Intern, Research'
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(expIndex, 'title', e.target.value)}
                    />          
                  </label>
                  <label htmlFor={`${exp.key}startDate`} className='flexLabel'>
                    Start Date:
                    <input 
                      type="text"
                      name="startDate"
                      id={`${exp.key}startDate`}
                      placeholder='Jan. 2024'
                      value={exp.startDate}
                      onChange={(e) => handleExperienceChange(expIndex, 'startDate', e.target.value)}
                    />          
                  </label>
                  <label htmlFor={`${exp.key}endDate`} className='flexLabel'>
                    End Date:
                    <input 
                      type="text"
                      name="endDate"
                      id={`${exp.key}endDate`}
                      placeholder='Apr. 2024'
                      value={exp.endDate}
                      onChange={(e) => handleExperienceChange(expIndex, 'endDate', e.target.value)}
                    />          
                  </label>
                  <label htmlFor={`${exp.key}location`} className='flexLabel'>
                    Location:
                    <input 
                      type="text"
                      name="location"
                      id={`${exp.key}location`}
                      placeholder='Los Gatos, California'
                      value={exp.location}
                      onChange={(e) => handleExperienceChange(expIndex, 'location', e.target.value)}
                    />          
                  </label>
                  <fieldset>
                    <legend className='detailsLabel'>Details:</legend>
                    <ul>
                      {exp.details.map((detail, detailIndex) => (
                        <li className='formListElement' key={detail.key}>
                          <span className="customBullet">■</span>
                          <textarea rows='4'
                            key={detail.key}
                            name="details"
                            id={detail.key}
                            aria-labelledby="detailsLabel"
                            value={detail.text}
                            onChange={(e) => handleDetailChange(expIndex, detailIndex, e.target.value)}
                          />
                          <button type='button' className='deleteBtn' onClick={() => removeDetail(expIndex, detailIndex)} aria-label="Delete">
                            <img src={delete_icon} className='deleteIcon' />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <br />
                    <div className='btnContainer'>
                      <button type='button' className='btn blueBtn' onClick={() => addDetail(expIndex)}>Add detail</button>
                    </div>
                  </fieldset>
                  <div className='btnContainer'>
                    <button type='button' className='btn redBtn' onClick={() => removeExperience(expIndex)}>Remove experience</button>
                  </div>
                </section>
              )}
              <hr className='formSeperator' />
            </React.Fragment>
          ))}
          <div className='btnContainer'>
            <button type='button' className='btn blueBtn' onClick={addExperience}>Add experience</button>
          </div>
        </>
      )}
    </fieldset>
  )
}

export default ExperienceFieldset
