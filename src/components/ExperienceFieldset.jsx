import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import chevron_down from '../assets/chevron-down.svg'
import chevron_up from '../assets/chevron-up.svg'
import delete_icon from '../assets/close-thick.svg'

function ExperienceFieldset({
  experience,
  setExperience,
  handleInputBlur,
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
  }

  const removeExperience = (expIndex) => {
    const updatedExperience = [...experience]
    updatedExperience.splice(expIndex, 1)
    setExperience(updatedExperience)
    if (!updatedExperience.length) {
      localStorage.setItem('resumeFormExperience', JSON.stringify(updatedExperience)) 
    }
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
  }

  const removeDetail = (expIndex, detailIndex) => {
    const updatedExperience = [...experience]
    const details = [...updatedExperience[expIndex].details]
    details.splice(detailIndex, 1)
    updatedExperience[expIndex].details = details
    setExperience(updatedExperience)
  }

  return (
    <fieldset className='mainFieldset'>
      <div className='dropdownContainer' onClick={toggleCollapse}>
        <legend>Experience</legend>
        <img src={isCollapsed ? chevron_down : chevron_up} alt={isCollapsed ? 'Expand' : 'Collapse'} className='chevronIcon'></img>
      </div>
      {!isCollapsed && (
        <>
          <hr className='formSeperator' />
          {experience.map((exp, expIndex) => (
            <React.Fragment key={exp.key}>
              <h2 className='formSectionHeader'>{exp.employer}</h2>
              <section className='formSection'>
                <label htmlFor={`${exp.key}employer`} className='flexLabel'>
                  Employer:
                  <input 
                    type="text"
                    name="employer"
                    id={`${exp.key}employer`}
                    value={exp.employer}
                    onChange={(e) => handleExperienceChange(expIndex, 'employer', e.target.value)}
                    onBlur={handleInputBlur('resumeFormExperience', experience)}
                  />          
                </label>
                <label htmlFor={`${exp.key}title`} className='flexLabel'>
                  Title:
                  <input 
                    type="text"
                    name="title"
                    id={`${exp.key}title`}
                    value={exp.title}
                    onChange={(e) => handleExperienceChange(expIndex, 'title', e.target.value)}
                    onBlur={handleInputBlur('resumeFormExperience', experience)}
                  />          
                </label>
                <label htmlFor={`${exp.key}startDate`} className='flexLabel'>
                  Start Date:
                  <input 
                    type="text"
                    name="startDate"
                    id={`${exp.key}startDate`}
                    value={exp.startDate}
                    onChange={(e) => handleExperienceChange(expIndex, 'startDate', e.target.value)}
                    onBlur={handleInputBlur('resumeFormExperience', experience)}
                  />          
                </label>
                <label htmlFor={`${exp.key}endDate`} className='flexLabel'>
                  End Date:
                  <input 
                    type="text"
                    name="endDate"
                    id={`${exp.key}endDate`}
                    value={exp.endDate}
                    onChange={(e) => handleExperienceChange(expIndex, 'endDate', e.target.value)}
                    onBlur={handleInputBlur('resumeFormExperience', experience)}
                  />          
                </label>
                <label htmlFor={`${exp.key}location`} className='flexLabel'>
                  Location:
                  <input 
                    type="text"
                    name="location"
                    id={`${exp.key}location`}
                    value={exp.location}
                    onChange={(e) => handleExperienceChange(expIndex, 'location', e.target.value)}
                    onBlur={handleInputBlur('resumeFormExperience', experience)}
                  />          
                </label>
                <fieldset>
                  <legend>Details:</legend>
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
                          onBlur={handleInputBlur('resumeFormExperience', experience)}
                        />
                        <button type='button' className='deleteBtn' onClick={() => removeDetail(expIndex, detailIndex)} aria-label="Delete">
                          <img src={delete_icon} className='deleteIcon' />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <br />
                  <div className='btnContainer'>
                    <button type='button' className='btn' onClick={() => addDetail(expIndex)}>Add detail</button>
                  </div>
                </fieldset>
                <div className='btnContainer'>
                  <button type='button' className='btn' onClick={() => removeExperience(expIndex)}>Remove experience</button>
                </div>
              </section>
              <hr className='formSeperator' />
            </React.Fragment>
          ))}
          <div className='btnContainer'>
            <button type='button' className='btn' onClick={addExperience}>Add experience</button>
          </div>
        </>
      )}
    </fieldset>
  )
}

export default ExperienceFieldset
