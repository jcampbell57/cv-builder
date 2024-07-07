import logoIcon from '../assets/text-box-outline.svg';

function Header() {
  return (
    <header role='banner'>
      <img src={logoIcon} className='appLogo'></img>
      <h1 className='appTitle'>CV Builder</h1>
    </header>
  )
}

export default Header
