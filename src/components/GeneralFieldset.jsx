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
  skills,
  interests,
  setName,
  setEmail,
  setPhone,
  setWebsite,
  setLocation,
  setSkills,
  setInterests,
}) {

  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const addSkill = () => {
    setSkills([...skills, ''])
  }

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills]
    updatedSkills[index] = value;
    setSkills(updatedSkills)
  }

  const removeSkill = (index) => {
    const newSkills = [...skills]
    newSkills.splice(index, 1)
    setSkills(newSkills)
  }

  const addInterest = () => {
    setInterests([...interests, ''])
  }

  const handleInterestChange = (index, value) => {
    const updatedInterests = [...interests]
    updatedInterests[index] = value;
    setInterests(updatedInterests)
  }

  const removeInterest = (index) => {
    const newInterests = [...interests]
    newInterests.splice(index, 1)
    setInterests(newInterests)
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
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label htmlFor="email" className='flexLabel'>
            Email:
            <input 
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label htmlFor="phone" className='flexLabel'>
            Phone:
            <input 
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </label>
          <label htmlFor="location" className='flexLabel'>
            Location:
            <input 
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </label>
          <label htmlFor="website" className='flexLabel'>
            Website:
            <input 
              type="text"
              name="website"
              id="website"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </label>
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
              <button type='button' className='btn' onClick={addSkill}>Add skill</button>
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
              <button type='button' className='btn' onClick={addInterest}>Add interest</button>
            </div>
          </fieldset>
        </>
      )}
    </fieldset>
  )
}

export default GeneralFieldset
