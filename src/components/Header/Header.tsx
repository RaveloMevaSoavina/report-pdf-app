import './Header.css';
import AkanthasLogo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <img alt='logo-akanthas' src={AkanthasLogo} className='logo-akanthas' />
      <span className='logo-title'>Akanthas</span>
    </div>
  );
};

export default Header;
