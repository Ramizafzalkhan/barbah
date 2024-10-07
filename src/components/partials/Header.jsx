import React, { useState } from 'react'
import { useMediaQuery } from "react-responsive";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Array of link objects
  const links = [
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'Contact Us', href: '#' },
    { id: 3, text: 'Login', href: '#' },
  ];
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <img
        src="/barbah_logo.svg"
        alt="Background"
        style={{
          objectFit: 'cover',
        }}
      />
      {isMobile ?
        <>
          <div onClick={toggleMenu} style={{ cursor: 'pointer', fontSize: '24px' }}>

            {/* //mobile responsive hamburger menu */}

            {isMenuOpen ? <IoClose /> : <FiAlignJustify />}
          </div>
          {isMenuOpen && (
            <nav style={{ position: 'absolute', top: '70px', right: '30px',display:'flex', flexDirection:'column', gap:'25px', zIndex:99, backgroundColor: 'black', padding: '10px 50px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
              {links.map((link) => (
                <a key={link.id} href={link.href} onClick={closeMenu} style={{ display: 'block', margin: '5px 0' }}>
                  {link.text}
                </a>
              ))}
              <button
                style={{
                  backgroundColor: '#f89813',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '12px 45px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  marginTop: '10px',
                }}
                onClick={() => alert('Button clicked!')} // Replace with actual functionality
              >
                Sign Up
              </button>
            </nav>
          )}
        </>

        :

        <nav style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          {links.map((link) => (
            <a key={link.id} href={link.href}>
              {link.text}
            </a>
          ))}
          <button
            style={{
              backgroundColor: '#f89813',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 45px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            onClick={() => alert('Button clicked!')} // Replace with actual functionality
          >
            Sign Up
          </button>
        </nav>
      }
    </div>
  )
}

export default Header