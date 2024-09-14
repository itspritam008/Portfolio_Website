import React from 'react'
import pritam from './pritam.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const HomePage = () => {

  const handleInstagram = ()=>{
    window.open("https://www.instagram.com/itspritam008?igsh=MWZ0dzl1NTdpenpmNg==", "_blank")
  }

  const handleLinkedIn = ()=>{
    window.open("https://www.linkedin.com/in/pritam-paul-84a495284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")
  }

  const handleYoutube = ()=>{
    window.open("https://youtube.com/@itspritam008?si=O9APYJnpp4EQHj9K", "_blank")
  }

  return (
    <>
      <div className='h-auto w-full flex flex-col justify-center items-center'>

        <div className='h-[15vh] w-[80%] lg:h-[20vh] border-b-4 border-yellow-500 flex justify-center items-center'>
          <h2 className='text-4xl lg:text-6xl font-junge font-extrabold'>Watching me first time ?</h2>
        </div>

        <div className='h-[35vh] sm:h-[50vh] md:h-[60vh] w-full lg:w-[80%] flex justify-center items-center'>
          <div className='h-[70%] w-1/2 bg-green-500 rounded-3xl overflow-hidden'>
            <img className='h-full w-full object-cover hover:scale-125 duration-500 ease-in-out' src={pritam} />
          </div>
        </div>

        <div className='h-[10vh] sm:h-[15vh] lg:h-[25vh] pb-14 lg:pb-10 w-[80%] text-center flex justify-center items-center'>
          <p className='font-montserrat font-medium sm:text-xl lg:text-2xl'>Hello! I’m <span className='bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent cursor-pointer font-black'> Pritam Paul </span>, a passionate 2nd-year undergraduate student pursuing a B.Tech in
            Computer Science Engineering at Sister Nivedita University.</p>
        </div>


        <div className=' h-auto w-[80%] py-14 px-7 md:px-16 lg:px-24 text-center gap-5 md:gap-8 flex justify-center items-center flex-col border border-black rounded-2xl'>
          <h3 className='font-junge text-3xl font-extrabold md:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent'>Academics</h3>
          <p className='font-montserrat lg:text-lg'>My journey in technology started during my schooling at St. Stephen's School, Dumdum,
            an ICSE-affiliated institution, where I developed a deep interest in coding. With a strong
            academic foundation, I achieved 96.2% in my ICSE and 96.6% in my ISC examinations.
            <br></br><br></br>My love for coding began in Class 9 when we were introduced to Java as part of our
            curriculum. This early exposure ignited my passion for programming, and it has been a
            driving force behind my decision to pursue Computer Science Engineering. Since then, I’ve
            been continually learning and honing my technical skills.
            <br></br><br></br>In college, I have currently maintained a 9.4 CGPA.</p>
        </div>

        <div className=' w-full h-[7vh] lg:h-[10vh]'></div>

        <div className=' h-auto w-[80%] py-14 px-7 md:px-16 lg:px-24 text-center gap-5 md:gap-8 flex justify-center items-center flex-col border border-black rounded-2xl'>
          <h3 className='font-junge text-3xl font-extrabold md:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent'>Technical Competence</h3>
          <p className='font-montserrat lg:text-lg'><span className='font-extrabold'>•</span> Data Structures & Algorithms: Winner of SKEPSIS’s DSA Quest 1.0,
            demonstrating strong problem-solving skills and proficiency in DSA. Currently, I am
            diving more deep into complex DSA Topics. Also, I was an active participant in the
            SKEPSIS 30-Day Coding Challenge.<br></br><br></br>
            <span className='font-extrabold'>•</span> Figma: Designed the prototype for our Smart India Hackathon (SIH) team,
            showcasing proficiency in UI/UX design.<br></br><br></br>
            <span className='font-extrabold'>•</span> Web Development: Currently learning and applying web development skills to
            contribute to the SIH project.</p>
        </div>

        <div className=' w-full h-[7vh] lg:h-[10vh]'></div>

        <div className=' h-auto w-[80%] py-14 px-7 md:px-16 lg:px-24 text-center gap-5 md:gap-8 flex justify-center items-center flex-col border border-black rounded-2xl'>
          <h3 className='font-junge text-3xl font-extrabold md:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent'>Skills <span className='font-montserrat font-medium'>&</span> Strengths</h3>
          <p className='font-montserrat lg:text-lg'><span className='font-extrabold'>•</span> Leadership & Team Management: Proven leadership skills through volunteering
            and event management experiences.<br></br><br></br>
            <span className='font-extrabold'>•</span> Communication: Strong verbal and written communication abilities, demonstrated
            by my active involvement in team-based projects and public speaking events.<br></br><br></br>
            <span className='font-extrabold'>•</span> Technical Expertise: Proficient in Data Structures and Algorithms, with
            experience in Figma for designing prototypes, and currently developing skills in web
            development.<br></br><br></br>
            <span className='font-extrabold'>•</span> Problem-Solving: A creative problem solver with a knack for tackling complex
            challenges, as evidenced by my participation and success in coding competitions</p>
        </div>

        <div className=' w-[70%] h-[10vh] lg:h-[20vh] flex justify-center items-center'>
          <div className='h-[5%] w-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full'></div>
        </div>

        <div className=' h-auto w-[80%] flex flex-col justify-center items-center md:gap-3 md:py-5'>
            <h4 className='text-xl font-junge sm:text-2xl md:text-3xl sm:py-5 font-semibold'>Stay in touch with me</h4>
            <div className=' h-[5vh] w-[50%] flex justify-evenly items-center text-3xl'>
                <FaInstagram className='cursor-pointer' onClick={handleInstagram}/>
                <FaLinkedin className='cursor-pointer' onClick={handleLinkedIn} />
                <FaYoutube className='cursor-pointer' onClick={handleYoutube} />
            </div>
        </div>

        <div className=' w-full h-[7vh] lg:h-[10vh]'></div>

      </div>

    </>
  )
}

export default HomePage
