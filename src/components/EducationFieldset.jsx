import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import chevron_down from '../assets/chevron-down.svg'
import chevron_up from '../assets/chevron-up.svg'
import delete_icon from '../assets/close-thick.svg'
import hidden_icon from '../assets/eye-off-outline.svg'
import visible_icon from '../assets/eye-outline.svg'

function EducationFieldset({
  education,
  setEducation,
}) {

  const [isCollapsed, setIsCollapsed] = useState(() => {
    const collapsedState = localStorage.getItem('educationCollapsed')
    return collapsedState ? JSON.parse(collapsedState) : true
  })  

  const toggleCollapse = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    localStorage.setItem('educationCollapsed', JSON.stringify(newState));
  }

  const addEducation = () => {
    const updatedEducation = [...education]
    const newEducation = {
      key: uuidv4(),
      collapsed: false,
      hidden: false,
      school: '',
      location: '',
      completionDate: '',
      degree: '',
      details: [],
    }
    setEducation([...updatedEducation, newEducation])
  }

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education]
    updatedEducation[index][field] = value;
    setEducation(updatedEducation)
    localStorage.setItem('resumeFormEducation', JSON.stringify(updatedEducation))
  }

  const removeEducation = (index) => {
    const updatedEducation = [...education]
    updatedEducation.splice(index, 1)
    setEducation(updatedEducation)
    localStorage.setItem('resumeFormEducation', JSON.stringify(updatedEducation)) 
  }

  const addDetail = (eduIndex) => {
    const updatedEducation = [...education]
    const newDetail = {
      key: uuidv4(),
      text: ''
    }
    const details = [...updatedEducation[eduIndex].details, newDetail]
    updatedEducation[eduIndex].details = details
    setEducation(updatedEducation)
  }

  const handleDetailChange = (eduIndex, detailIndex, value) => {
    const updatedEducation = [...education]
    const details = [...updatedEducation[eduIndex].details]
    details[detailIndex].text = value;
    // updatedEducation[eduIndex].details = details
    setEducation(updatedEducation)
    localStorage.setItem('resumeFormEducation', JSON.stringify(updatedEducation))
  }

  const removeDetail = (eduIndex, detailIndex) => {
    const updatedEducation = [...education]
    const details = [...updatedEducation[eduIndex].details]
    details.splice(detailIndex, 1)
    updatedEducation[eduIndex].details = details
    setEducation(updatedEducation)
    localStorage.setItem('resumeFormEducation', JSON.stringify(updatedEducation))
  }

  return (
    <fieldset className='mainFieldset'>
      <div className='dropdownContainer' onClick={toggleCollapse}>
        <legend className='fieldsetHeader'>Education</legend>
        <img src={isCollapsed ? chevron_down : chevron_up}
             alt={isCollapsed ? 'Expand' : 'Collapse'}
             className='chevronIcon'>
        </img>
      </div>
      {!isCollapsed && (
        <>
          <hr className='formSeperator' />
          {education.map((edu, eduIndex) => (
            <React.Fragment key={edu.key}>
              <div className='formSectionHeader'>
                <div className='formSectionTitleContainer' onClick={() => handleEducationChange(eduIndex, 'collapsed', !edu.collapsed)}>
                  <h2 className='formSectionTitle'>{edu.school.length > 0 ? edu.school : 'New school'}</h2>
                  <img src={edu.collapsed ? chevron_down : chevron_up}
                       alt={edu.collapsed ? 'Expand' : 'Collapse'}
                       className='chevronIcon'>
                  </img>
                </div>
                <div className='visibilityIconContainer'
                     onClick={() => handleEducationChange(eduIndex, 'hidden', !edu.hidden)}>
                  <img src={edu.hidden ? hidden_icon : visible_icon} 
                       alt={edu.hidden ? 'Show' : 'Hide'} 
                       className='visibilityIcon'>
                  </img>
                </div>
              </div>
              {!edu.collapsed && (
                <section className='formSection'>
                  <label htmlFor={`${edu.key}school`} className='flexLabel'>
                    School:
                    <input 
                      type="text"
                      name="school"
                      id={`${edu.key}school`}
                      placeholder='University of California, Berkeley'
                      value={edu.school}
                      onChange={(e) => handleEducationChange(eduIndex, 'school', e.target.value)}
                    />
                  </label>
                  <label htmlFor={`${edu.key}location`} className='flexLabel'>
                    Location:
                    <input 
                      type="text"
                      name="location"
                      id={`${edu.key}location`}
                      placeholder='Berkeley, CA'
                      value={edu.location}
                      onChange={(e) => handleEducationChange(eduIndex, 'location', e.target.value)}
                    />
                  </label>
                  <label htmlFor={`${edu.key}completionDate`} className='flexLabel'>
                    Completion Date:
                    <input 
                      type="text"
                      name="completionDate"
                      id={`${edu.key}completionDate`}
                      placeholder='May, 2024'
                      value={edu.completionDate}
                      onChange={(e) => handleEducationChange(eduIndex, 'completionDate', e.target.value)}
                    />
                  </label>
                  <label htmlFor={`${edu.key}degree`} className='flexLabel'>
                    Degree:
                    <input 
                      type="text"
                      name="degree"
                      id={`${edu.key}degree`}
                      placeholder='BA, Computer Science'
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(eduIndex, 'degree', e.target.value)}
                    />
                  </label>
                  <fieldset>
                    <legend className='detailsLabel'>Details:</legend>
                    <ul>
                      {edu.details.map((detail, detailIndex) => (
                        <li className='formListElement' key={detail.key}>
                          <span className="customBullet">■</span>
                          <textarea rows='3' 
                            name="details"
                            id={detail.key}
                            aria-labelledby="detailsLabel"
                            value={detail.text}
                            onChange={(e) => handleDetailChange(eduIndex, detailIndex, e.target.value)}
                          />
                          <button type='button' className='deleteBtn' onClick={() => removeDetail(eduIndex, detailIndex)} aria-label="Delete">
                            <img src={delete_icon} className='deleteIcon' />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <br />
                    <div className='btnContainer'>
                      <button type='button' className='btn blueBtn' onClick={() => addDetail(eduIndex)}>Add detail</button>
                    </div>
                  </fieldset>
                  <div className='btnContainer'>
                    <button type='button' className='btn redBtn' onClick={() => removeEducation(eduIndex)}>Remove education</button>
                  </div>
                </section>
              )}
              <hr className='formSeperator' />
            </React.Fragment>
          ))}
          <div className='btnContainer'>
            <button type='button' className='btn blueBtn' onClick={addEducation}>Add education</button>
          </div>
        </>
      )}
    </fieldset>
  )
}

export default EducationFieldset
