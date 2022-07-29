import React from 'react'
import { useState } from 'react'

// Import images 
import project1 from './images/Project1.png'
import project2 from './images/Project2.png'
import project3 from './images/Project3.png'
import project4 from './images/Project4.png'
import profile from './images/Profile.jpeg'
import community from './images/community.jpeg'
import hotyoga from './images/hotyoga.jpeg'
import cooking from './images/cooking.jpeg'

// Import icons 
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoNodejs, IoLogoPython, IoLogoGithub } from 'react-icons/io'
import { SiReact, SiMongodb, SiDjango, SiPostgresql, SiBootstrap } from 'react-icons/si'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'


import { FaReact } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'

import { SiTypescript } from 'react-icons/si'

import { SiExpress } from 'react-icons/si'


import { DiJavascript1 } from 'react-icons/di'
import { DiPostgresql } from 'react-icons/di'
import { DiGithubBadge } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiGitBranch } from 'react-icons/di'



import { MdOutlineEmail } from 'react-icons/md'
import { Rotate, LightSpeed } from 'react-reveal'

import Jump from 'react-reveal'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// import ReactTooltip from 'react-tooltip'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'






import { Link } from 'react-router-dom'


const Home = () => {

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <>

      <section className='text-center second about' id='aboutme'>
        <Rotate top left>
          <img src={profile} alt='profile picture' className='profile card-img-left' />
        </Rotate>
        <div className="card-body">
          <LightSpeed right>

            <h1 className="typing card-title">Yuanmeng Liu</h1>
          </LightSpeed>



          <Jump bottom>



            <p className='text-center mt-3 mr-5 text-md-left card-text'> Hi! 你好, I&apos;m a Full-stack Wed Developer and a recent software engineering graduate from General Assembly (June 2022).<br></br>
              I’m a nice, fun and friendly person, I’m honest and punctual, I work well in a team but also on my own and I have good listening and communication skills.<br></br>

              Now that I have completed the course, I’d like to find a place where I can work in a trusting, goal-oriented, and supportive environment.<br></br> Current Stack: HTML, CSS, JavaScript, React.js, Express.js, Python, Django. </p>


          </Jump>
        </div>




      </section>







      <section id='projects' >

        <h1 className='mt-5 mb-5 text-center projectstop under'>Projects</h1>
        <div>
          <img alt="project-img" src={project4} />
          <div className='project-body odd'>
            <h2>My Kitchen</h2>
            <h3>1 week | Solo</h3>
            <div className='iconsdiv'>

              <Tippy content='React' placement='bottom'>
                <button><SiReact /></button>
              </Tippy>




              <Tippy content='Javascript' placement='bottom'>

                <button><IoLogoJavascript /></button>
              </Tippy>

              <Tippy content='Diango' placement='bottom'>

                <button> <SiDjango /></button>
              </Tippy>
              <Tippy content='Python' placement='bottom'>

                <button><IoLogoPython /></button>
              </Tippy>
              <Tippy content='Sass' placement='bottom'>

                <button><IoLogoSass /></button>
              </Tippy>


            </div>

            <p>
              A Full-stack web application that allows users to view the menu and the location of the different restaurants and to make a booking from the restaurant. A confirmation email will be sent to users after the booking is made, and users can log in to their account to see the booking details and delete or modify the booking if needed.
            </p>
            <div className=''>
              <a href="https://mykitchenproject4.herokuapp.com/" target="_blank" rel="noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
              <a href="https://github.com/liuyuanmeng/Project-4" target="_blank" rel="noreferrer">
                <IoLogoGithub />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className='project-body even'>
            <h2>Frog Vs Mario</h2>
            <h3>1 week | Solo</h3>
            <div className='iconsdiv'>
              <Tippy content='Html' placement='bottom'>
                <button><AiFillHtml5 /></button>
              </Tippy>
              <Tippy content='Css' placement='bottom'>
                <button><IoLogoCss3 /></button>
              </Tippy>
              <Tippy content='Javascript' placement='bottom'>
                <button> <IoLogoJavascript /></button>
              </Tippy>
            </div>
            <p>

              This is a personalised version of the famous arcade game Frogger. Features include sound effects, six lives to reach the finish line.
            </p>
            <div>
              <a href="https://liuyuanmeng.github.io/project-one/" target="_blank" rel="noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
              <a href="https://github.com/liuyuanmeng/project-one" target="_blank" rel="noreferrer">
                <IoLogoGithub />
              </a>
            </div>
          </div>
          <img alt="project-img" src={project1} />
        </div>
        <div>
          <img alt="project-img" src={project2} />
          <div className='project-body odd'>
            <h2>Fruity 4 You</h2>
            <h3>36 hours | Group Project</h3>
            <div className='iconsdiv'>

              <Tippy content='Javascript' placement='bottom'>
                <button><SiReact /></button>
              </Tippy>

              <Tippy content='Javascript' placement='bottom'>

                <button> <IoLogoJavascript /></button>
              </Tippy>

              <Tippy content='Javascript' placement='bottom'>
                <button><IoLogoCss3 /></button>
              </Tippy>

              <Tippy content='Javascript' placement='bottom'>
                <button><SiBootstrap /></button>
              </Tippy>
            </div>
            <p>
              Working in a 3-person group one-day hackathon project. We built an app that consumes a public API (fruityvice), allowing users to search
              all different kinds of fruits by either name or family. Users can also calculate nutrition after choosing three of their favourite fruits.
            </p>
            <div className='mt-5'>
              <a href="https://fruity4you.netlify.app/" target="_blank" rel="noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
              <a href="https://github.com/liuyuanmeng/Project2-FruitsHackathon" target="_blank" rel="noreferrer">
                <IoLogoGithub />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className='project-body even'>
            <h2>Book Store</h2>
            <h3>1 week | Group Project</h3>
            <div className='iconsdiv'>
              <Tippy content='React' placement='bottom'>
                <button><SiReact /></button>
              </Tippy>
              <Tippy content='Javascript' placement='bottom'>
                <button><IoLogoJavascript /></button>
              </Tippy>
              <Tippy content='Mongodb' placement='bottom'>
                <button><SiMongodb /></button>
              </Tippy>
              <Tippy content='Node.js' placement='bottom'>
                <button> <IoLogoNodejs /></button>
              </Tippy>
              <Tippy content='Sass' placement='bottom'>
                <button><IoLogoSass /></button>
              </Tippy>
              <Tippy content='PostgreSQL' placement='bottom'>
                <button> <SiPostgresql /></button>
              </Tippy>

            </div>
            <p>
              As a group of three people, we created a book app
              which allows users to register and interact by posting reviews, updating account information, and adding books to the
              wishlist. Full-Stack MERN app with a CRUD API that consumes a MongoDB database.

            </p>
            <div>
              <a href="https://firestonebookshop.herokuapp.com/" target="_blank" rel="noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
              <a href="https://github.com/liuyuanmeng/waterstones-bookshop" target="_blank" rel="noreferrer">
                <IoLogoGithub />
              </a>
            </div>
          </div>
          <img alt="project-img" src={project3} />
        </div>

      </section>














      <section className="skills " id='skills'>
        <h1 className='text-center mt-5 mb-5 top under'>Skills</h1>
        <div className='parent-container'>

          <br />
          <div className="icons-container">
            <div className='icon-item'>


              <p>JavaScript</p>
              <DiJavascript1 style={{ fontSize: '50px' }} />
            </div>
            <div className='icon-item'>



              <p>React</p>
              <FaReact style={{ fontSize: '50px' }} />
            </div>


            <div className='icon-item'>

              <p>Python</p>
              <FaPython style={{ fontSize: '50px' }} />
            </div>
            <div className='icon-item'>

              <p>Django</p>
              <SiDjango style={{ fontSize: '50px' }} />
            </div>
            <div className='icon-item'>

              <p>PostgreSQL</p>
              <DiPostgresql style={{ fontSize: '50px' }} />
            </div>


            <div className='icon-item'>

              <p>Node.js</p>
              <FaNodeJs style={{ fontSize: '50px' }} />
            </div>
            <div className='icon-item'>

              <p>Express</p>
              <SiExpress style={{ fontSize: '50px' }} />
            </div>
            <div className='icon-item'>

              <p>MongoDB</p>
              <SiMongodb style={{ fontSize: '50px' }} />
            </div>

            <div className='icon-item'>

              <p>GitHub</p>
              <DiGithubBadge style={{ fontSize: '50px' }} />
            </div>

            <div className='icon-item'>

              <p>Git</p>
              <DiGitBranch style={{ fontSize: '50px' }} />
            </div>

            <div className='icon-item'>

              <p>HTML</p>
              <DiHtml5 style={{ fontSize: '50px' }} />
            </div>

            <div className='icon-item'>

              <p>Css</p>
              <DiCss3 style={{ fontSize: '50px' }} />
            </div>


          </div>
        </div>



      </section>






      <section id='experience' className='experience'>
        <h1 className='text-center under'>Experience</h1>

        <div className="experience-container ">
          <div className="bloc-tabs ">
            <button
              className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(1)}
            >
              General Assembly
            </button>
            <button
              className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(2)}
            >
              Salvatore Ferragamo
            </button>
            <button
              className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(3)}
            >
              Humberton
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={toggleState === 1 ? 'content  active-content' : 'content '}
            >
              <h2>March 2022 -  June 202 – Software Engineering Immersive</h2>
              <hr />
              <p>
                • 500+ hours of applied learning and development across both front-end and back-end development, with daily standups, workshops, and homework, culminating in 4 projects <br></br>
                • Building skills and familiarity in HTML5, CSS3, JavaScript ES6, the MERN stack (MongoDB, Express.js, React, Node.js), Python, Django, PostgreSQL, and other web development frameworks<br></br>
                • Applying learnings to create both individual projects and projects and across teams of 2-4 individuals

              </p>
            </div>

            <div
              className={toggleState === 2 ? 'content  active-content' : 'content'}
            >
              <h2>September 2018 – September 2019  Sales assistant – Salvatore Ferragamo</h2>
              <hr />
              <p>
                • Applied excellent customer service skills whilst offering advice and assistance to <br></br>customers in a professional and efficient manner<br></br>
                • Handled payments, gift cards, and refunds at the cash desk and welcomed an average<br></br> of 80-100 customers on a daily basis<br></br>
                • Utilised interpersonal and communication skills while providing exceptional<br></br> customer service and exchanged with customers to tailor advice and recommendations<br></br>
                • Met and achieved KPIs, exceeding targets and expectations by remaining motivated<br></br>
                • Was able to maintain high standards of display & visual merchandising to<br></br> ensure the store was well presented<br></br>
              </p>
            </div>

            <div
              className={toggleState === 3 ? 'content  active-content' : 'content'}
            >
              <h2>September 2017- January 2018 Customer Support Advisor - Humberton</h2>
              <hr />
              <p>
                •  Provided support to customers via emailed tickets, telephone <br></br> (inbound and outbound), and social media outlets
                <br></br>
                • Handled payments, gift cards, and refunds at the cash desk and welcomed an average<br></br> of 80-100 customers on a daily basis<br></br>
                • Translated documents to be used for company website <br></br> releases from English to Chinese (vice versa)
                <br></br>
                • Assisted with arranging meetings, presentations, interviews, and other requests from management <br></br>
                • Performed day-to-day administrative office support
                <br></br>
              </p>
            </div>
          </div>
        </div>


      </section>



      <section id='interests'>
        <h1 className='under'>Interests</h1>
        <p>
          I love doing hot yoga, community work and cooking in my spare time. I love feeling relaxed after yoga classes. I grew up with my grandparents and was interested in watching them cook big meals for the family. What I love the most about cooking is the ability to be creative. It allows experimentation with different spices, cuisines and techniques and to share your love. When I moved to London, I joined the local community to help organise events for the local people, which I truly enjoyed doing.


        </p>
        <div className="interests-container">
          <img src={hotyoga} alt="hotyoga" />
          <img src={community} alt="community" />


          <img src={cooking} alt="cooking" />




        </div>


      </section>











      <section id='contact' className='conatctsection'>
        <h1 className='mt-5 text-center under'>Contact</h1>
        <div>

          <div>
            <ul>
              <li><a href="mailto:liuyuanmeng66@gmail.com"><MdOutlineEmail />Email</a></li>
              <li><a href='https://github.com/liuyuanmeng' target="_blank" rel="noreferrer"><DiGithubBadge />GitHub</a></li>
              <li><a href='https://www.linkedin.com/in/yuanmeng-liu/' target="_blank" rel="noreferrer"><FaLinkedin />LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </section>




    </>






  )
}

export default Home