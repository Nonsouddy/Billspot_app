// import Image from 'next/image'
// import React from 'react'
// import '../page.css'
// import Logo from '../Svgs/Logo.svg'


// function NavBar() {
//   return (
//     <nav>
//         <div className='NavBar'>
//         <div className='NavBar_section'>
//           <div>
//             <Image className='logo' src={Logo} alt='' />
//           </div>
//           <div className='NavBar_Links'>
//             <div className='NavBar_Link_details'>
//               <div className='Home'><a href=''>Home</a></div>
//               <div className='features'> <a href=''>Features</a></div>
//               <div className='features'> <a href=''>Help</a></div>
//             </div>
//             <button className='NavBar_button'>Download</button>
//           </div>
//         </div>

//       </div>

//     </nav>
//   )
// }

// export default NavBar



import Image from 'next/image';
import React, { useState } from 'react';
import '../page.css';
import Logo from '../Svgs/Logo.svg';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="NavBar">
        <div className="NavBar_section">
          <div>
            <Image className="logo" src={Logo} alt="" />
          </div>
          <div className={` NavBar_Links ${ isOpen ? 'open' : ''}`}>
            <div className="NavBar_Link_details">
              <div className="Home"><a href="#">Home</a></div>
              <div className="features"><a href="#">Features</a></div>
              <div className="features"><a href="#">Help</a></div>
            </div>
            <button className="NavBar_button">Download</button>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;