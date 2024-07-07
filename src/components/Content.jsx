import ResumeForm from './ResumeForm.jsx'
import ResumePreview from './ResumePreview.jsx'

function Content() {
  return (
    <div role='main' className='contentContainer'>
      <ResumeForm />
      <ResumePreview />
    </div>
  )
}

export default Content