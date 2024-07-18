import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import chevron_down from '../assets/chevron-down.svg'
import chevron_up from '../assets/chevron-up.svg'
import delete_icon from '../assets/close-thick.svg'

function EducationFieldset({
  education,
  setEducation,
}) {

  const addEducation = () => {
    const updatedEducation = [...education]
    const newEducation = {
      key: uuidv4(),
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
  }

  const removeDetail = (eduIndex, detailIndex) => {
    const updatedEducation = [...education]
    const details = [...updatedEducation[eduIndex].details]
    details.splice(detailIndex, 1)
    updatedEducation[eduIndex].details = details
    setEducation(updatedEducation)
  }

  const removeEducation = (index) => {
    const updatedEducation = [...education]
    updatedEducation.splice(index, 1)
    setEducation(updatedEducation)
  }

  return (
    <fieldset className='mainFieldset'>
      <div className='dropdownContainer'>
        <legend>Education</legend>
        <img src={chevron_up} className='chevronIcon'></img>
      </div>
      <hr className='formSeperator' />
      {education.map((edu, eduIndex) => (
        <React.Fragment key={edu.key}>
          <h2 className='formSectionHeader'>{edu.school}</h2>
          <section className='formSection'>
            <label htmlFor={`${edu.key}school`} className='flexLabel'>
              School:
              <input 
                type="text"
                name="school"
                id={`${edu.key}school`}
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
                value={edu.degree}
                onChange={(e) => handleEducationChange(eduIndex, 'degree', e.target.value)}
              />
            </label>
            <fieldset>
              <legend>Details:</legend>
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
                <button type='button' className='btn' onClick={() => addDetail(eduIndex)}>Add detail</button>
              </div>
            </fieldset>
            <div className='btnContainer'>
              <button type='button' className='btn' onClick={() => removeEducation(eduIndex)}>Remove education</button>
            </div>
          </section>
          <hr className='formSeperator' />
        </React.Fragment>
      ))}
      <div className='btnContainer'>
        <button type='button' className='btn' onClick={addEducation}>Add education</button>
      </div>
    </fieldset>
  )
}

export default EducationFieldset
