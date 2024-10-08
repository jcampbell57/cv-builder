import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import chevron_down from '../assets/chevron-down.svg'
import chevron_up from '../assets/chevron-up.svg'
import delete_icon from '../assets/close-thick.svg'
import hidden_icon from '../assets/eye-off-outline.svg'
import visible_icon from '../assets/eye-outline.svg'

function ProjectsFieldset({
  projects,
  setProjects,
  skillExamples,
}) {

  const [isCollapsed, setIsCollapsed] = useState(() => {
    const collapsedState = localStorage.getItem('projectsCollapsed')
    return collapsedState ? JSON.parse(collapsedState) : true
  })  

  const toggleCollapse = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    localStorage.setItem('projectsCollapsed', JSON.stringify(newState));
  }

  const addProject = () => {
    const updatedProjects = [...projects]
    const newProj = {
      key: uuidv4(),
      collapsed: false,
      hidden: false,
      name: '',
      skills: [],
      githubRepo: '',
      livePreview: '',
      details: [],
    }
    setProjects([...updatedProjects, newProj])
  }

  const handleProjectChange = (projIndex, field, value) => {
    const updatedProject = [...projects]
    updatedProject[projIndex][field] = value;
    setProjects(updatedProject)
    localStorage.setItem('resumeFormProjects', JSON.stringify(updatedProject))
  }

  const removeProject = (projIndex) => {
    const updatedProjects = [...projects]
    updatedProjects.splice(projIndex, 1)
    setProjects(updatedProjects)
    localStorage.setItem('resumeFormProjects', JSON.stringify(updatedProjects))
  }

  const addSkill = (projIndex) => {
    const updatedProjects = [...projects]
    const skills = [...updatedProjects[projIndex].skills, '']
    updatedProjects[projIndex].skills = skills
    setProjects(updatedProjects)
  }

  const handleSkillChange = (projIndex, skillIndex, value) => {
    const updatedProject = [...projects]
    const skills = [...updatedProject[projIndex].skills]
    skills[skillIndex] = value;
    updatedProject[projIndex].skills = skills
    setProjects(updatedProject)
    localStorage.setItem('resumeFormProjects', JSON.stringify(updatedProject))
  }

  const removeSkill = (projIndex, skillIndex) => {
    const updatedProjects = [...projects]
    updatedProjects[projIndex].skills.splice(skillIndex, 1)
    setProjects(updatedProjects)
    localStorage.setItem('resumeFormProjects', JSON.stringify(updatedProjects))
  }

  const addDetail = (projIndex) => {
    const updatedProjects = [...projects]
    const newDetail = {
      key: uuidv4(),
      text: ''
    }
    const details = [...updatedProjects[projIndex].details, newDetail]
    updatedProjects[projIndex].details = details
    setProjects(updatedProjects)
  }

  const handleDetailChange = (projIndex, detailIndex, value) => {
    const updatedProject = [...projects]
    const details = [...updatedProject[projIndex].details]
    details[detailIndex].text = value;
    updatedProject[projIndex].details = details
    setProjects(updatedProject)
    localStorage.setItem('resumeFormProjects', JSON.stringify(updatedProject))
  }

  const removeDetail = (projIndex, detailIndex) => {
    const updatedProjects = [...projects]
    updatedProjects[projIndex].details.splice(detailIndex, 1)
    setProjects(updatedProjects)
    localStorage.setItem('resumeFormProjects', JSON.stringify(updatedProjects))
  }

  return (
    <fieldset className='mainFieldset'>
      <div className='dropdownContainer' onClick={toggleCollapse}>
        <legend className='fieldsetHeader'>Projects</legend>
        <img src={isCollapsed ? chevron_down : chevron_up}
             alt={isCollapsed ? 'Expand' : 'Collapse'}
             className='chevronIcon'>
        </img>
      </div>
      {!isCollapsed && (
        <>
          <hr className='formSeperator' />
          {projects.map((proj, projIndex) => (
            <React.Fragment key={proj.key}>
              <div className='formSectionHeader'>
                <div className='formSectionTitleContainer' onClick={() => handleProjectChange(projIndex, 'collapsed', !proj.collapsed)}>
                  <h2 className='formSectionTitle'>{proj.name.length > 0 ? proj.name : 'New project'}</h2>
                  <img src={proj.collapsed ? chevron_down : chevron_up} 
                       alt={proj.collapsed ? 'Expand' : 'Collapse'} 
                       className='chevronIcon'>
                  </img>
                </div>
                <div className='visibilityIconContainer'
                     onClick={() => handleProjectChange(projIndex, 'hidden', !proj.hidden)}>
                  <img src={proj.hidden ? hidden_icon : visible_icon}
                       alt={proj.hidden ? 'Show' : 'Hide'}
                       className='visibilityIcon'>
                  </img>
                </div>
              </div>
              {!proj.collapsed && (
                <section className='formSection'>
                  <label htmlFor={`${proj.key}name`} className='flexLabel'>
                    Name:
                    <input 
                      type="text"
                      name="name"
                      id={`${proj.key}name`}
                      placeholder='Facebook Clone'
                      value={proj.name}
                      onChange={(e) => handleProjectChange(projIndex, 'name', e.target.value)}
                    />
                  </label>
                  <label htmlFor={`${proj.key}githubRepo`} className='flexLabel'>
                    GitHub Repo:
                    <input 
                      type="url"
                      name="githubRepo"
                      id={`${proj.key}githubRepo`}
                      placeholder='https://github.com/username/facebook-clone'
                      value={proj.githubRepo}
                      onChange={(e) => handleProjectChange(projIndex, 'githubRepo', e.target.value)}
                    />
                  </label>
                  <label htmlFor={`${proj.key}livePreview`} className='flexLabel'>
                    Live Preview URL:
                    <input 
                      type="url"
                      name="livePreview"
                      id={`${proj.key}livePreview`}
                      placeholder='https://facebook-clone.fly.dev/'
                      value={proj.livePreview}
                      onChange={(e) => handleProjectChange(projIndex, 'livePreview', e.target.value)}
                    />
                  </label>
                  <fieldset>
                    <legend className='skillsLabel'>Skills:</legend>
                    <ul>
                      {proj.skills.map((skill, skillIndex) => (
                        <li className='formListElement' key={skillIndex}>
                          <span className="customBullet">■</span>
                          <input 
                            type="text"
                            name="skills"
                            id={`${proj.key}Skill${skillIndex}`}
                            aria-labelledby="skillsLabel"
                            placeholder={skillExamples[Math.floor(Math.random() * skillExamples.length)]}
                            value={skill}
                            onChange={(e) => handleSkillChange(projIndex, skillIndex, e.target.value)}
                          />
                          <button type='button' className='deleteBtn' onClick={() => removeSkill(projIndex, skillIndex)} aria-label="Delete">
                            <img src={delete_icon} className='deleteIcon' />
                          </button>
                        </li>
                      ))}            
                    </ul>
                    <br />
                    <div className='btnContainer'>
                      <button type='button' className='btn blueBtn' onClick={() => addSkill(projIndex)}>Add skill</button>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className='detailsLabel'>Details:</legend>
                    <ul>
                      {proj.details.map((detail, detailIndex) => (
                        <li className='formListElement' key={detail.key}>
                          <span className="customBullet">■</span>
                          <textarea rows='4' 
                            name="details"
                            id={detail.key}
                            aria-labelledby="detailsLabel"
                            value={detail.text}
                            onChange={(e) => handleDetailChange(projIndex, detailIndex, e.target.value)}
                          />
                          <button type='button' className='deleteBtn' onClick={() => removeDetail(projIndex, detailIndex)} aria-label="Delete">
                            <img src={delete_icon} className='deleteIcon' />
                          </button>
                        </li>
                      ))}          
                    </ul>
                    <br />
                    <div className='btnContainer'>
                      <button type='button' className='btn blueBtn' onClick={() => addDetail(projIndex)}>Add detail</button>
                    </div>
                  </fieldset>
                  <div className='btnContainer'>
                    <button type='button' className='btn redBtn' onClick={() => removeProject(projIndex)}>Remove project</button>
                  </div>
                </section>
              )}
              <hr className='formSeperator' />
            </React.Fragment>
          ))}
          <div className='btnContainer'>
            <button type='button' className='btn blueBtn' onClick={addProject}>Add project</button>
          </div>
        </>
      )}
    </fieldset>
  )
}

export default ProjectsFieldset
