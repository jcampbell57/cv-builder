import { useState } from 'react'
import chevron_down from '../assets/chevron-down.svg'
import chevron_up from '../assets/chevron-up.svg'
import delete_icon from '../assets/close-thick.svg'

function GeneralFieldset({
  name,
  email,
  phone,
  website,
  location,
  certifications,
  skills,
  skillExamples,
  interests,
  setName,
  setEmail,
  setPhone,
  setWebsite,
  setLocation,
  setCertifications,
  setSkills,
  setInterests,
}) {

  const [isCollapsed, setIsCollapsed] = useState(() => {
    const collapsedState = localStorage.getItem('generalCollapsed')
    return collapsedState ? JSON.parse(collapsedState) : true
  })  

  const toggleCollapse = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    localStorage.setItem('generalCollapsed', JSON.stringify(newState));
  }

  const handleNameChange = (value) => {
    setName(value)
    localStorage.setItem('resumeFormName', JSON.stringify(value))
  }

  const handleEmailChange = (value) => {
    setEmail(value)
    localStorage.setItem('resumeFormEmail', JSON.stringify(value))
  }

  const handlePhoneChange = (value) => {
    setPhone(value)
    localStorage.setItem('resumeFormPhone', JSON.stringify(value))
  }

  const handleLocationChange = (value) => {
    setLocation(value)
    localStorage.setItem('resumeFormLocation', JSON.stringify(value))
  }

  const handleWebsiteChange = (value) => {
    setWebsite(value)
    localStorage.setItem('resumeFormWebsite', JSON.stringify(value))
  }

  const addCertification = () => {
    setCertifications([...certifications, ''])
  }

  const handleCertificationChange = (index, value) => {
    const updatedCertifications = [...certifications]
    updatedCertifications[index] = value;
    setCertifications(updatedCertifications)
    localStorage.setItem('resumeFormCertifications', JSON.stringify(updatedCertifications))
  }

  const removeCertification = (index) => {
    const newCertifications = [...certifications]
    newCertifications.splice(index, 1)
    setCertifications(newCertifications)   
    localStorage.setItem('resumeFormCertifications', JSON.stringify(newCertifications))
  }

  const addSkill = () => {
    setSkills([...skills, ''])
  }

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills]
    updatedSkills[index] = value;
    setSkills(updatedSkills)
    localStorage.setItem('resumeFormSkills', JSON.stringify(updatedSkills))
  }

  const removeSkill = (index) => {
    const newSkills = [...skills]
    newSkills.splice(index, 1)
    setSkills(newSkills)   
    localStorage.setItem('resumeFormSkills', JSON.stringify(newSkills))
  }

  const addInterest = () => {
    setInterests([...interests, ''])
  }

  const handleInterestChange = (index, value) => {
    const updatedInterests = [...interests]
    updatedInterests[index] = value;
    setInterests(updatedInterests)
    localStorage.setItem('resumeFormInterests', JSON.stringify(updatedInterests))
  }

  const removeInterest = (index) => {
    const newInterests = [...interests]
    newInterests.splice(index, 1)
    setInterests(newInterests)
    localStorage.setItem('resumeFormInterests', JSON.stringify(newInterests))
  }

  return (
    <fieldset className='mainFieldset'>
      <div className='dropdownContainer' onClick={toggleCollapse}>
        <legend>Personal Info</legend>
        <img src={isCollapsed ? chevron_down : chevron_up} alt={isCollapsed ? 'Expand' : 'Collapse'} className='chevronIcon'></img>
      </div>
      {!isCollapsed && (
        <>
          <label htmlFor="name" className='flexLabel'>
            Name:
            <input 
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => handleNameChange(event.target.value)}
            />
          </label>
          <label htmlFor="email" className='flexLabel'>
            Email:
            <input 
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => handleEmailChange(event.target.value)}
            />
          </label>
          <label htmlFor="phone" className='flexLabel'>
            Phone:
            <input 
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(event) => handlePhoneChange(event.target.value)}
            />
          </label>
          <label htmlFor="location" className='flexLabel'>
            Location:
            <input 
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={(event) => handleLocationChange(event.target.value)}
            />
          </label>
          <label htmlFor="website" className='flexLabel'>
            Website:
            <input 
              type="text"
              name="website"
              id="website"
              value={website}
              onChange={(event) => handleWebsiteChange(event.target.value)}
            />
          </label>
          <fieldset>
            <legend>Certifications:</legend>
            <ul>
              {certifications.map((certification, certificationIndex) => (
                <li className='formListElement' key={`${name}Certification${certificationIndex}`}>
                  <span className="customBullet">■</span>
                  <input 
                    type="text"
                    name="certifications"
                    id={`${name}Certification${certificationIndex}`}
                    aria-labelledby="certificationsLabel"
                    value={certification}
                    onChange={(e) => handleCertificationChange(certificationIndex, e.target.value)}
                  />
                  <button type='button' className='deleteBtn' onClick={() => removeCertification(certificationIndex)} aria-label="Delete">
                    <img src={delete_icon} className='deleteIcon' />
                  </button>
                </li>
              ))}            
            </ul>
            <br />
            <div className='btnContainer'>
              <button type='button' className='btn blueBtn' onClick={addCertification}>Add certification</button>
            </div>
          </fieldset>
          <fieldset>
            <legend>Skills:</legend>
            <ul>
              {skills.map((skill, skillIndex) => (
                <li className='formListElement' key={`${name}Skill${skillIndex}`}>
                  <span className="customBullet">■</span>
                  <input 
                    type="text"
                    name="skills"
                    id={`${name}Skill${skillIndex}`}
                    aria-labelledby="skillsLabel"
                    placeholder={skillExamples[Math.floor(Math.random() * skillExamples.length)]}
                    value={skill}
                    onChange={(e) => handleSkillChange(skillIndex, e.target.value)}
                  />
                  <button type='button' className='deleteBtn' onClick={() => removeSkill(skillIndex)} aria-label="Delete">
                    <img src={delete_icon} className='deleteIcon' />
                  </button>
                </li>
              ))}            
            </ul>
            <br />
            <div className='btnContainer'>
              <button type='button' className='btn blueBtn' onClick={addSkill}>Add skill</button>
            </div>
          </fieldset>
          <fieldset>
            <legend>Interests:</legend>
            <ul>
              {interests.map((interest, interestIndex) => (
                <li className='formListElement' key={`${name}Interest${interestIndex}`}>
                  <span className="customBullet">■</span>
                  <input 
                    type="text"
                    name="interests"
                    id={`${name}Interest${interestIndex}`}
                    aria-labelledby="interestsLabel"
                    value={interest}
                    onChange={(e) => handleInterestChange(interestIndex, e.target.value)}
                  />
                  <button type='button' className='deleteBtn' onClick={() => removeInterest(interestIndex)} aria-label="Delete">
                    <img src={delete_icon} className='deleteIcon' />
                  </button>
                </li>
              ))}          
            </ul>
            <br />
            <div className='btnContainer'>
              <button type='button' className='btn blueBtn' onClick={addInterest}>Add interest</button>
            </div>
          </fieldset>
        </>
      )}
    </fieldset>
  )
}

export default GeneralFieldset
