import EducationFieldset from './EducationFieldset.jsx'
import ExperienceFieldset from './ExperienceFieldset.jsx'
import GeneralFieldset from './GeneralFieldset.jsx'
import ProjectsFieldset from './ProjectsFieldset.jsx'

function ResumeForm({
  name,
  email,
  phone,
  website,
  location,
  skills,
  interests,
  education,
  experience,
  projects,
  setName,
  setEmail,
  setPhone,
  setWebsite,
  setLocation,
  setSkills,
  setInterests,
  setEducation,
  setExperience,
  setProjects,
  clearForm,
}) {
  return (
    <div className="formContainer">
      <div className='btnContainer'>
        <button type='button' className='btn' onClick={clearForm}>Clear form</button>
        <button type='button' className='btn'>Print</button>
      </div>
      <form>
        <GeneralFieldset 
            name={name}
            email={email}
            phone={phone}
            website={website}
            location={location}
            skills={skills}
            interests={interests}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setWebsite={setWebsite}
            setLocation={setLocation}
            setSkills={setSkills}
            setInterests={setInterests}
        />

        <EducationFieldset 
          education={education}
          setEducation={setEducation}
        />

        <ExperienceFieldset 
          experience={experience}
          setExperience={setExperience}
        />

        <ProjectsFieldset 
          projects={projects}
          setProjects={setProjects}
        />
      </form>
    </div>
  )
}

export default ResumeForm
