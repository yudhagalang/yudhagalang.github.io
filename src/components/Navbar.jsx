import React from 'react';
import { motion } from 'framer-motion';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBriefcase,
  faCode,
  faGraduationCap,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', id: 'home', icon: faHome, specialAction: (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { name: 'Work Experience', id: 'work-experience', icon: faBriefcase },
    { name: 'Skills', id: 'skills', icon: faCode },
    { name: 'Contact', id: 'contact', icon: faEnvelope },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            {link.specialAction ? (
              <a onClick={link.specialAction} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={link.icon} size="lg" />
                <span>{link.name}</span>
              </a>
            ) : (
              <a href={`#${link.id}`}>
                <FontAwesomeIcon icon={link.icon} size="lg" />
                <span>{link.name}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
