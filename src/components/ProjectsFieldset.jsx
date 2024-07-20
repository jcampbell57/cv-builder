import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import chevron_down from '../assets/chevron-down.svg'
import chevron_up from '../assets/chevron-up.svg'
import delete_icon from '../assets/close-thick.svg'

function ProjectsFieldset({
  projects,
  setProjects,
  handleInputBlur,
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
  }

  const removeProject = (projIndex) => {
    const updatedProjects = [...projects]
    updatedProjects.splice(projIndex, 1)
    setProjects(updatedProjects)
    if (!updatedProjects.length) {
      localStorage.setItem('resumeFormProjects', JSON.stringify(updatedProjects)) 
    }
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
  }

  const removeSkill = (projIndex, skillIndex) => {
    const updatedProjects = [...projects]
    updatedProjects[projIndex].skills.splice(skillIndex, 1)
    setProjects(updatedProjects)
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
  }

  const removeDetail = (projIndex, detailIndex) => {
    const updatedProjects = [...projects]
    updatedProjects[projIndex].details.splice(detailIndex, 1)
    setProjects(updatedProjects)
  }

  return (
    <fieldset className='mainFieldset'>
      <div className='dropdownContainer' onClick={toggleCollapse}>
        <legend>Projects</legend>
        <img src={isCollapsed ? chevron_down : chevron_up} alt={isCollapsed ? 'Expand' : 'Collapse'} className='chevronIcon'></img>
      </div>
      {!isCollapsed && (
        <>
          <hr className='formSeperator' />
          {projects.map((proj, projIndex) => (
            <React.Fragment key={proj.key}>
              <h2 className='formSectionHeader'>{proj.name}</h2>
              <section className='formSection'>
                <label htmlFor={`${proj.key}name`} className='flexLabel'>
                  Name:
                  <input 
                    type="text"
                    name="name"
                    id={`${proj.key}name`}
                    value={proj.name}
                    onChange={(e) => handleProjectChange(projIndex, 'name', e.target.value)}
                    onBlur={handleInputBlur('resumeFormProjects', projects)}
                  />
                </label>
                <label htmlFor={`${proj.key}githubRepo`} className='flexLabel'>
                  GitHub Repo:
                  <input 
                    type="url"
                    name="githubRepo"
                    id={`${proj.key}githubRepo`}
                    value={proj.githubRepo}
                    onChange={(e) => handleProjectChange(projIndex, 'githubRepo', e.target.value)}
                    onBlur={handleInputBlur('resumeFormProjects', projects)}
                  />
                </label>
                <label htmlFor={`${proj.key}livePreview`} className='flexLabel'>
                  Live Preview URL:
                  <input 
                    type="url"
                    name="livePreview"
                    id={`${proj.key}livePreview`}
                    value={proj.livePreview}
                    onChange={(e) => handleProjectChange(projIndex, 'livePreview', e.target.value)}
                    onBlur={handleInputBlur('resumeFormProjects', projects)}
                  />
                </label>
                <fieldset>
                  <legend>Skills:</legend>
                  <ul>
                    {proj.skills.map((skill, skillIndex) => (
                      <li className='formListElement' key={skillIndex}>
                        <span className="customBullet">■</span>
                        <input 
                          type="text"
                          name="skills"
                          id={`${proj.key}Skill${skillIndex}`}
                          aria-labelledby="skillsLabel"
                          value={skill}
                          onChange={(e) => handleSkillChange(projIndex, skillIndex, e.target.value)}
                          onBlur={handleInputBlur('resumeFormProjects', projects)}
                        />
                        <button type='button' className='deleteBtn' onClick={() => removeSkill(projIndex, skillIndex)} aria-label="Delete">
                          <img src={delete_icon} className='deleteIcon' />
                        </button>
                      </li>
                    ))}            
                  </ul>
                  <br />
                  <div className='btnContainer'>
                    <button type='button' className='btn' onClick={() => addSkill(projIndex)}>Add skill</button>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Details:</legend>
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
                          onBlur={handleInputBlur('resumeFormProjects', projects)}
                        />
                        <button type='button' className='deleteBtn' onClick={() => removeDetail(projIndex, detailIndex)} aria-label="Delete">
                          <img src={delete_icon} className='deleteIcon' />
                        </button>
                      </li>
                    ))}          
                  </ul>
                  <br />
                  <div className='btnContainer'>
                    <button type='button' className='btn' onClick={() => addDetail(projIndex)}>Add detail</button>
                  </div>
                </fieldset>
                <div className='btnContainer'>
                  <button type='button' className='btn' onClick={() => removeProject(projIndex)}>Remove project</button>
                </div>
              </section>
              <hr className='formSeperator' />
            </React.Fragment>
          ))}
          <div className='btnContainer'>
            <button type='button' className='btn' onClick={addProject}>Add project</button>
          </div>
        </>
      )}
    </fieldset>
  )
}

export default ProjectsFieldset
