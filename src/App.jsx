import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import MatrixAnimation from './components/MatrixAnimation'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faPython,
  faGolang,
  faJs,
  faReact,
  faNodeJs,
  faAws,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faLaptopCode,
  faCode, // Import faCode from solid-svg-icons
} from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Import the CSS file

function App() {
  const skillsData = {
    Language: [
      { name: 'Java', icon: faJava },
      { name: 'Python', icon: faPython },
      { name: 'Go', icon: faGolang },
      { name: 'C/C++', icon: faLaptopCode },
    ],
    Framework: [
      { name: 'Spring Boot', icon: faCode },
      { name: 'React', icon: faReact },
      { name: 'Node.js', icon: faNodeJs },
    ],
    Database: [
      { name: 'MySQL', icon: faDatabase },
      { name: 'Postgres', icon: faDatabase },
      { name: 'Oracle', icon: faDatabase },
      { name: 'Kafka', icon: faDatabase },
    ],
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />

      <motion.header
        className="App-header"
        id="home"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MatrixAnimation />
        <img src="/prof-pic.jpeg" alt="Muhammad Yudha Galang Fardana" className="profile-picture" />
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Yudha Galang
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Software Engineer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Experienced software engineer with four years of hands-on experience in the financial banking industry. Proven track record of developing, and implementing software solutions that enhance operational efficiency, streamline processes, and ensure regulatory compliance. Proficient in various programming languages and frameworks, especially Java and Spring Boot. Eager to continue learning and contribute to innovative projects in various sectors.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Jakarta, Indonesia | <a href="mailto:yudhagalang@gmail.com">yudhagalang@gmail.com</a> | <a href="https://github.com/yudhagalang" target="_blank">github.com/yudhagalang</a>
          </motion.p>
        </div>
      </motion.header>

      <motion.section
        className="work-experience"
        id="work-experience"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2>Work Experience</h2>
        <div className="experience-item">
          <h3>Backend Developer | PT Inti Corpora Teknologi</h3>
          <p>May 2021 - Present | Full-Time</p>
          <ul>
            <li>Collaborate with cross-functional teams to design, develop, and implement software solutions that meet the needs of our banking clients</li>
            <li>Work closely with business analysts, and other stakeholders to understand requirements and translate them into technical specifications</li>
            <li>Integrate applications with services provided by our banking clients and ensure it complies the specifications and regulations</li>
            <li>Provide support and troubleshooting for existing software systems as needed</li>
            <li>Researched and implemented new technologies to meet our banking clients requirements</li>
          </ul>
          <p><strong>Tech Stacks:</strong> Java, Spring Boot, MySQL, PostgreSQL, OracleDB, Kafka</p>
        </div>

        <div className="experience-item">
          <h3>IT Engineering | PT IDstar Cipta Teknologi</h3>
          <p>Placement: PT Mitra Transaksi Indonesia (EDC Team)</p>
          <p>April 2020 - April 2021 | Contract</p>
          <ul>
            <li>Developed application features for EDC based on business specification and requirement</li>
            <li>Comprehended the business flow and brainstormed on what to improve in the code with the team</li>
            <li>Tested new application features for EDC in dev environment and fixed some bugs</li>
            <li>Documented and reviewed code changes, test results, and technical specifications</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="skills"
        id="skills"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div className="skills-category" key={category}>
              <h3>{category}</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.name}>
                    <FontAwesomeIcon icon={skill.icon} /> {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="contact-me"
        id="contact"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:yudhagalang@gmail.com">yudhagalang@gmail.com</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yudhagalang" target="_blank">linkedin.com/in/yudhagalang</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/yudhagalang" target="_blank">github.com/yudhagalang</a></li>
        </ul>
      </motion.section>
    </motion.div>
  )
}

export default App
