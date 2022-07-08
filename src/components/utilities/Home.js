import React from 'react'
import { Carousel } from 'react-bootstrap'
import { CarouselItemProps } from 'react-bootstrap'
import project1 from '../images/Project1.png'
import project2 from '../images/Project2.png'
import project3 from '../images/Project3.png'
import project4 from '../images/Project4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaReact } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'
import { SiDjango } from 'react-icons/si'
import { DiPostgresql } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { DiGithubBadge } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { MdOutlineEmail } from 'react-icons/md'
import { Rotate, LightSpeed } from 'react-reveal'
import profile from '../images/Profile.jpeg'
import Jump from 'react-reveal'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'




import { Link } from 'react-router-dom'


const Home = () => {
  return (

    < div className='d-grid gap-3'>

      <section className='text-center second' id='aboutme'>
        <Rotate top left>
          <img src={profile} alt='profile picture' className='profile' />
        </Rotate>
        <LightSpeed right>
          {/* <h1 className='text-center mt-6 '>About Me</h1> */}
          <h1 className="typing">Yuanmeng Liu</h1>
        </LightSpeed>
        <Jump bottom>

          <p className='text-center mt-3 big '> Hi! 你好, I&apos; m a full-stack Wed Developer Recent software engineering graduate from General Assembly (June 2022).
            Current Stack: HTML, CSS, JavaScript, React.js, Express.js, Python, Django.<br></br>I’m a nice fun and friendly person, I’m honest and punctual, I work well in a team but also on my own as I like to set myself goals which I will achieve, I have good listening and communication skills. </p>
          <p className='text-center mt-3  big'> </p>

        </Jump>


      </section>


      <section className='projects' id='projects'>


        <h2 className='text-center mb-5 mt-5'>Projects</h2>


        <div className='projects-container'>

          <div className="container-img">

            <img
              className="rounded image fluid "
              src={project1}

            />

            <div className="description">

              <h3 className="text">Frog Vs Mario</h3>
              <p className="text">Frog vs Mario is a grid-based game modelled on the 1981 arcade action game Frogger.</p>
              <a href="https://liuyuanmeng.github.io/project-one/" target="_blank" rel="noreferrer">
                <Button type="button" className="btn btn-sm"  variant="outline-warning">
                  Open Project
                </Button></a>
              <a href="https://github.com/liuyuanmeng/project-one" target="_blank" rel="noreferrer">
                <Button type="button" className="btn btn-sm "  variant="outline-warning">
                  View on GitHub
                </Button></a>
            </div>
          </div>





          <div className="container-img">
            <img
              className="rounded image "
              src={project2}

            />

            <div className="description">

              <h3 className="text">Fruity 4 You</h3>
              <p className="text">Fruity4You is an app that calculates all the nutritional information after your three choices.</p>
              <a href="https://fruity-4-you.netlify.app/" target="_blank" rel="noreferrer">
                <Button type="button" className="btn btn-sm" variant="outline-warning">
                  Open Project
                </Button></a>
              <a href="https://github.com/liuyuanmeng/Project2-FruitsHackathon" target="_blank" rel="noreferrer">
                <Button type="button" className="btn btn-sm " variant="outline-warning">
                  View on GitHub
                </Button></a>
            </div>
          </div>



          <div className="container-img">
            <img
              className="rounded image"
              src={project3}

            />

            <div className="description">

              <h3 className="text">Book Shop</h3>
              <p className="text"> The idea was to have a database of books and an app which mirrors the Waterstones website.</p>
              <a href="https://firestonebookshop.herokuapp.com/" target="_blank" rel="noreferrer">
                <Button type="button" className="btn btn-sm" variant="outline-warning">
                  Open Project
                </Button></a>
              <a href="https://github.com/liuyuanmeng/waterstones-bookshop" target="_blank" rel="noreferrer">
                <Button type="button" className="btn btn-sm " variant="outline-warning">
                  View on GitHub
                </Button></a>
            </div>
          </div>




          <div className="container-img">
            <img
              className="rounded image"
              src={project4}

            />

            <div className="description">

              <h3>My Kitchen</h3>
              <p>This restaurant reservation app  is a solo full-stack project.</p>
              <a href="https://mykitchenproject4.herokuapp.com/" target="_blank" rel="noreferrer">
                <Button type="button" className="btn btn-sm" variant="outline-warning">
                  Open Project
                </Button></a>
              <a href="https://github.com/liuyuanmeng/Project-4" target="_blank" rel="noreferrer">
                <Button type="button" className="btn btn-sm " variant="outline-warning">
                  View on GitHub
                </Button></a>
            </div>
          </div>
        </div>



      </section>



      <section className="skills " id='skills'>
        <h2 className='text-center mt-5 mb-5 top'>Skills</h2>
        <div className='parent-container'>
       
          <br />
          <div className="icons-container">
            <div className='icon-item'>


              <p>JavaScript</p>
              <DiJavascript1 style={{ fontSize: '50px' }} />
            </div>
            <div className='icon-item'>

              <p>TypeScript</p>
              <SiTypescript style={{ fontSize: '50px' }} />
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

      <section id='experience'>
        <div className='cv-container'>

          <h1 className='mt-5 text-center'> Experience </h1>
          <div className='box'>
            <div className='left'>

              <h4>September 2018 – September 2019  Sales assistant – Salvatore Ferragamo</h4><br></br>


              <p className='text-left '>
                • Applied excellent customer service skills whilst offering advice and assistance to <br></br>customers in a professional and efficient manner<br></br>
                • Handled payments, gift cards, and refunds at the cash desk and welcomed an average<br></br> of 80-100 customers on a daily basis<br></br>
                • Utilised interpersonal and communication skills while providing exceptional<br></br> customer service and exchanged with customers to tailor advice and recommendations<br></br>
                • Met and achieved KPIs, exceeding targets and expectations by remaining motivated<br></br>
                • Was able to maintain high standards of display & visual merchandising to<br></br> ensure the store was well presented<br></br>
              </p>
            </div>



            <div className='right'>
              <h4 className='text-md-right'>September 2017- January 2018 Customer Support Advisor - Humberton</h4><br></br>

              <p className='text-right '>
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



      <section className='Contact justify-content-center' id='contact'>
        <h2 className='text-center mt-3 '>Contact Me</h2>
        <br />
        <div className='align-content-center'>
          <div className='coantctspace'>
            <a  href="https://github.com/liuyuanmeng" target="_blank" rel="noreferrer">  <DiGithubBadge style={{ fontSize: '50px' }} /> </a>

          </div>
          <div className='coantctspace'>  <a  href="https://www.linkedin.com/in/yuanmeng-liu/" target="_blank" rel="noreferrer"> <FaLinkedin style={{ fontSize: '50px' }} /> </a></div>
          <div className='coantctspace'>  <a  href='mailto:liuyuanmeng66@gmail.com' target="_blank" rel="noreferrer"> <MdOutlineEmail style={{ fontSize: '50px' }} /> </a></div>
         
         
        </div>



      </section>

    </div>




  )
}

export default Home