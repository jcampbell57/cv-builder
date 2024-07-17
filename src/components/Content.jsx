import { useState } from 'react'
import exampleData from '../assets/exampleData.js'
import ResumeForm from './ResumeForm.jsx'
import ResumePreview from './ResumePreview.jsx'

function Content() {
  const [name, setName] = useState(exampleData.general.name)
  const [email, setEmail] = useState(exampleData.general.email)
  const [phone, setPhone] = useState(exampleData.general.phone)
  const [website, setWebsite] = useState(exampleData.general.website)
  const [location, setLocation] = useState(exampleData.general.location)
  const [skills, setSkills] = useState(exampleData.general.skills)
  const [interests, setInterests] = useState(exampleData.general.interests)
  const [education, setEducation] = useState(exampleData.education)
  const [experience, setExperience] = useState(exampleData.experience)
  const [projects, setProjects] = useState(exampleData.projects)

  function userInfo() {
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

    // return details.join(' ❖ ')
    return details.map((detail, index) => <span key={index}>{detail}</span>).reduce((prev, curr) => [prev, ' ❖ ', curr])
  }

  return (
    <div role='main' className='contentContainer'>
      <ResumeForm />
      <ResumePreview
        name={name}
        userInfo={userInfo()}
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
