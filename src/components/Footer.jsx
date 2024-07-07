import githubIcon from '../assets/GitHub-light-32px.png'

function Footer() {
  return (
    <footer role='contentinfo'>
      <p>Copyright © {new Date().getFullYear()} jcampbell57</p>

      <a href='https://github.com/jcampbell57' target='_blank'>
        <img src={githubIcon} className='githubIcon'></img>
      </a>
    </footer>
  )
}

export default Footer
