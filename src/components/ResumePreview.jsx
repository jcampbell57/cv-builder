function ResumePreview({
  name,
  email,
  phone,
  location,
  website,
  userInfo,
  skills,
  interests,
  education,
  experience,
  projects,
}) {
  return (
    <div className="previewContainer">
      <div className="previewPage eb-garamond-normal">
        {(name.length > 0 || email.length > 0 || phone.length > 0 || location.length > 0 || website.length > 0) && (
          <section className="generalInfoPreview">
            <h2 className="previewName eb-garamond-bold">{name}</h2>
            <p className="previewUserInfo">{userInfo}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="experiencePreview">
            <h3 className="previewSectionHeader eb-garamond-bold">WORK EXPERIENCE</h3>
            <ul>
              {experience.map(exp => (
                <li className="previewListItem" key={exp.key}>
                  <div className="previewFlexContainer">
                    <h3 className="previewListHeader eb-garamond-bold">{exp.employer}</h3>
                    <h3 className="previewListHeader eb-garamond-bold">{exp.startDate} - {exp.endDate}</h3>
                  </div>
                  <div className="previewFlexContainer">
                    <span className="previewListSubheader eb-garamond-italic">{exp.title}</span>
                    <span className="previewListSubheader eb-garamond-italic">{exp.location}</span>
                  </div>
                  <ul className="bulletedList">
                    {exp.details.map(detail => (
                      <li key={detail.key}>{detail.text}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        )}

        {projects.length > 0 && (
          <section className="projectsPreview">
            <h3 className="previewSectionHeader eb-garamond-bold">PERSONAL PROJECTS</h3>
            <ul>
              {projects.map(proj => (
                <li className="previewListItem" key={proj.key}>
                  <div className="projectFlexContainer">
                    <h3 className="previewListHeader eb-garamond-bold">{proj.name}</h3>
                    {/* &nbsp; is a non-breaking space character */}
                    {proj.skills.length > 0 && (
                      <span className="previewListSubheader eb-garamond-italic">&nbsp;| {proj.skills.join(', ')}</span>
                    )}
                    <div className="linkContainer rightJustify">
                      {proj.livePreview.length > 0 && (
                        <a href={proj.livePreview} className="previewListLink rightJustify eb-garamond-bold-italic">Live Depoloyment</a>
                      )}
                      {(proj.livePreview.length > 0 && proj.githubRepo.length > 0) && (
                        <span>&nbsp;|&nbsp;</span>
                      )}
                      {proj.githubRepo.length > 0 && (
                        <a href={proj.githubRepo} className="previewListLink eb-garamond-bold-italic">GitHub Link</a>
                      )}
                    </div>
                  </div>
                  <ul className="bulletedList">
                    {proj.details.map(detail => (
                      <li key={detail.key}>{detail.text}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        )}

        {education.length > 0 && (
          <section className="educationPreview">
            <h3 className="previewSectionHeader eb-garamond-bold">EDUCATION</h3>
            <ul>
              {education.map(edu => (
                <li className="previewListItem" key={edu.key}>
                  <div className="previewFlexContainer">
                    <h3 className="previewListHeader eb-garamond-bold">{edu.school}</h3>
                    <h3 className="previewListHeader eb-garamond-bold">{edu.completionDate}</h3>
                  </div>
                  <div className="previewFlexContainer">
                    <span className="previewListSubheader eb-garamond-italic">{edu.degree}</span>
                    <span className="previewListSubheader eb-garamond-italic">{edu.location}</span>
                  </div>
                  <ul className="bulletedList">
                    {edu.details.map(detail => (
                      <li key={detail.key}>{detail.text}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        )}

        {(skills.length > 0 || interests.length > 0) && (
          <section className="skillsInterestPreview">
            {(() => {
              if (skills.length > 0 && interests.length === 0) {
                return <h3 className="previewSectionHeader eb-garamond-bold">SKILLS</h3>;
              } else if (skills.length === 0 && interests.length > 0) {
                return <h3 className="previewSectionHeader eb-garamond-bold">INTERESTS</h3>;
              } else if (skills.length > 0 && interests.length > 0) {
                return <h3 className="previewSectionHeader eb-garamond-bold">SKILLS & INTERESTS</h3>;
              }
            })()}
            <ul className="bulletedList">
              {skills.length > 0 && (
                <li className="previewSkills">
                  <span className="eb-garamond-bold">Skills: </span>{skills.join(', ')}
                </li>
              )}
              {interests.length > 0 &&  (
                <li className="previewInterests">
                  <span className="eb-garamond-bold">Interests: </span>{interests.join(', ')}
                </li>
              )}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}

export default ResumePreview
