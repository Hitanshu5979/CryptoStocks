import React, {useState,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  const [click , setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false);
      } 
      else
      {
          setButton(true);
      }
  };
  useEffect(()=>{
  showButton()
}, []);
  window.addEventListener('resize',showButton);
  
  return (

    <>
      <nav className='navbar'>
          <div className='navbar-container'>
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                CryptoStocks <i className='fab fa-typo3' />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'> 
                   <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                       Home
                   </Link>
                </li> 
                <li className='nav-item'> 
                   <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                       Services
                   </Link>
                </li> 
                <li className='nav-item'> 
                   <Link to='/StocksAPI' className='nav-links' onClick={closeMobileMenu}>
                       Products
                   </Link>
                </li> 

                <li className='nav-item'> 
                   <Link to='/Login' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Login
                   </Link>
                   </li>

                   <li className='nav-item'> 
                   <Link to='/Sign-Up' className='nav-links-mobile' onClick={closeMobileMenu}>
                       Sign Up
                   </Link>
                   </li>
              </ul>
              {button && <div className ='Login-button' style={{backgroundColor:"none",borderRadius:"1px",padding:"5px"}}> <Link to='/Login' className='btn'style={{color:"black",textDecoration:"none"}} >LOGIN</Link></div>}
              {button && <div className ='SignUp-button' style={{marginLeft:"0.5rem",backgroundColor:"none",borderRadius:"1px",padding:"5px"}}><Link to='/sign-up' className='btn' style={{color:"black",textDecoration:"none"}}>SIGN UP</Link></div>}
          </div>
      </nav>
    </>
  );
}

export default Navbar;
