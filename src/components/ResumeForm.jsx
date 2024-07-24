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
  certifications,
  skills,
  skillExamples,
  interests,
  education,
  experience,
  projects,
  setName,
  setEmail,
  setPhone,
  setWebsite,
  setLocation,
  setCertifications,
  setSkills,
  setInterests,
  setEducation,
  setExperience,
  setProjects,
  populateExample,
  clearForm,
}) {
  return (
    <div className="formContainer">
      <div className='menuBtnContainer'>
        <button type='button' className='btn redBtn' onClick={clearForm}>Clear form</button>
        <button type='button' className='btn blueBtn' onClick={populateExample}>Example data</button>
        <button type='button' className='btn greenBtn' onClick={() => window.print()}>Print</button>
      </div>
      <form>
        <GeneralFieldset 
            name={name}
            email={email}
            phone={phone}
            website={website}
            location={location}
            certifications={certifications}
            skills={skills}
            skillExamples={skillExamples}
            interests={interests}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setWebsite={setWebsite}
            setLocation={setLocation}
            setCertifications={setCertifications}
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
          skillExamples={skillExamples}
        />
      </form>
    </div>
  )
}

export default ResumeForm
