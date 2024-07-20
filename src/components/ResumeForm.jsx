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
  handleInputBlur,
  populateExample,
  clearForm,
}) {
  return (
    <div className="formContainer">
      <div className='menuBtnContainer'>
        <button type='button' className='btn clearBtn' onClick={clearForm}>Clear form</button>
        <button type='button' className='btn populateBtn' onClick={populateExample}>Example data</button>
        <button type='button' className='btn printBtn'>Print</button>
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
            handleInputBlur={handleInputBlur}
        />

        <EducationFieldset
          education={education}
          setEducation={setEducation}
          handleInputBlur={handleInputBlur}
        />

        <ExperienceFieldset
          experience={experience}
          setExperience={setExperience}
          handleInputBlur={handleInputBlur}        
        />

        <ProjectsFieldset
          projects={projects}
          setProjects={setProjects}
          handleInputBlur={handleInputBlur}        
        />
      </form>
    </div>
  )
}

export default ResumeForm
