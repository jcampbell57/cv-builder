import { useState } from 'react'
import exampleData from '../assets/exampleData.js'
import ResumeForm from './ResumeForm.jsx'
import ResumePreview from './ResumePreview.jsx'

function Content() {
  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem('resumeFormName')
    return storedName ? JSON.parse(storedName) : exampleData.general.name
  })  
  const [email, setEmail] = useState(() => {
    const storedEmail = localStorage.getItem('resumeFormEmail')
    return storedEmail ? JSON.parse(storedEmail) : exampleData.general.email
  })  
  const [phone, setPhone] = useState(() => {
    const storedPhone = localStorage.getItem('resumeFormPhone')
    return storedPhone ? JSON.parse(storedPhone) : exampleData.general.phone
  })  
  const [website, setWebsite] = useState(() => {
    const storedWebsite = localStorage.getItem('resumeFormWebsite')
    return storedWebsite ? JSON.parse(storedWebsite) : exampleData.general.website
  })  
  const [location, setLocation] = useState(() => {
    const storedLocation = localStorage.getItem('resumeFormLocation')
    return storedLocation ? JSON.parse(storedLocation) : exampleData.general.location
  })  
  const [certifications, setCertifications] = useState(() => {
    const storedCertifications = localStorage.getItem('resumeFormCertifications')
    return storedCertifications ? JSON.parse(storedCertifications) : exampleData.general.certifications
  })  
  const [skills, setSkills] = useState(() => {
    const storedSkills = localStorage.getItem('resumeFormSkills')
    return storedSkills ? JSON.parse(storedSkills) : exampleData.general.skills
  })  
  const [interests, setInterests] = useState(() => {
    const storedInterests = localStorage.getItem('resumeFormInterests')
    return storedInterests ? JSON.parse(storedInterests) : exampleData.general.interests
  })  
  const [education, setEducation] = useState(() => {
    const storedEducation = localStorage.getItem('resumeFormEducation')
    return storedEducation ? JSON.parse(storedEducation) : exampleData.education
  })  
  const [experience, setExperience] = useState(() => {
    const storedExperience = localStorage.getItem('resumeFormExperience')
    return storedExperience ? JSON.parse(storedExperience) : exampleData.experience
  })  
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem('resumeFormProjects')
    return storedProjects ? JSON.parse(storedProjects) : exampleData.projects
  })  

  const clearForm = () => {
    setName('')
    setEmail('')
    setPhone('')
    setWebsite('')
    setLocation('')
    setCertifications([])
    setSkills([])
    setInterests([])
    setEducation([])
    setExperience([])
    setProjects([])
    localStorage.setItem('resumeFormName', JSON.stringify(''))
    localStorage.setItem('resumeFormEmail', JSON.stringify(''))
    localStorage.setItem('resumeFormPhone', JSON.stringify(''))
    localStorage.setItem('resumeFormWebsite', JSON.stringify(''))
    localStorage.setItem('resumeFormLocation', JSON.stringify(''))
    localStorage.setItem('resumeFormCertifications', JSON.stringify([]))
    localStorage.setItem('resumeFormSkills', JSON.stringify([]))
    localStorage.setItem('resumeFormInterests', JSON.stringify([]))
    localStorage.setItem('resumeFormEducation', JSON.stringify([]))
    localStorage.setItem('resumeFormExperience', JSON.stringify([]))
    localStorage.setItem('resumeFormProjects', JSON.stringify([]))
  }

  const populateExample = () => {
    const freshData = JSON.parse(JSON.stringify(exampleData))
    setName(freshData.general.name)
    setEmail(freshData.general.email)
    setPhone(freshData.general.phone)
    setWebsite(freshData.general.website)
    setLocation(freshData.general.location)
    setCertifications(freshData.general.certifications)
    setSkills(freshData.general.skills)
    setInterests(freshData.general.interests)
    setEducation(freshData.education)
    setExperience(freshData.experience)
    setProjects(freshData.projects)
    localStorage.setItem('resumeFormName', JSON.stringify(freshData.general.name))
    localStorage.setItem('resumeFormEmail', JSON.stringify(freshData.general.email))
    localStorage.setItem('resumeFormPhone', JSON.stringify(freshData.general.phone))
    localStorage.setItem('resumeFormWebsite', JSON.stringify(freshData.general.website))
    localStorage.setItem('resumeFormLocation', JSON.stringify(freshData.general.location))
    localStorage.setItem('resumeFormCertifications', JSON.stringify(freshData.general.certifications))
    localStorage.setItem('resumeFormSkills', JSON.stringify(freshData.general.skills))
    localStorage.setItem('resumeFormInterests', JSON.stringify(freshData.general.interests))
    localStorage.setItem('resumeFormEducation', JSON.stringify(freshData.education))
    localStorage.setItem('resumeFormExperience', JSON.stringify(freshData.experience))
    localStorage.setItem('resumeFormProjects', JSON.stringify(freshData.projects))
  }

  const userInfo = () => {
    const details = []

    if (email.length > 0) {
      details.push(email)
    }

    if (phone.length > 0) {
      details.push(phone)
    }

    if (location.length > 0) {
      details.push(location)
    }

    if (website.length > 0) {
      const websiteLink = <a href={`${website}`}>{website}</a>
      details.push(websiteLink)
    }

    if (details.length > 0) {
      return details.map((detail, index) => <span key={index}>{detail}</span>).reduce((prev, curr) => [prev, ' ❖ ', curr])
    }
  }

  const skillExamples = [
    'Ruby on Rails',
    'React',
    'NodeJS',
    'Prisma ORM',
    'JavaScript',
    'PostgreSQL',
    'git',
    'HTML5',
    'CSS3',
    'webpack',
    'Jest',
    'responsive design',
  ]

  return (
    <div role='main' className='contentContainer'>
      <ResumeForm
        name={name}
        email={email}
        phone={phone}
        website={website}
        location={location}
        certifications={certifications}
        skills={skills}
        skillExamples={skillExamples}
        interests={interests}
        education={education}
        experience={experience}
        projects={projects}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setWebsite={setWebsite}
        setLocation={setLocation}
        setCertifications={setCertifications}
        setSkills={setSkills}
        setInterests={setInterests}
        setEducation={setEducation}
        setExperience={setExperience}
        setProjects={setProjects}
        populateExample={populateExample}
        clearForm={clearForm}
      />
      <ResumePreview
        name={name}
        email={email}
        phone={phone}
        website={website}
        location={location}
        userInfo={userInfo()}
        certifications={certifications}
        skills={skills}
        interests={interests}
        education={education}
        experience={experience}
        projects={projects}
      />
    </div>
  )
}

export default Content
