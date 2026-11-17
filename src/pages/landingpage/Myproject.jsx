import React, {useState} from 'react'
import "../landingpage/myproject.css"
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import {  TbBrandGithub   } from "react-icons/tb";
import AnimatedContent from '../AnimatedContent.jsx';


const Myproject = () => {
    const projectData = [
        {
            image:'/netflix-dark-background.png',
            title:'Netflix Cl Landing page',
            subTitle:'My netflix clone landingpage showcasing skills and projects, built with React and CSS. Fully responsive with a clean design.',
            html:'REACT',
            css:'CSS',
            javascript:"FIGMA",
            figma:"GITHUB",
                frontend:"Frontend",
            links:[
                {
                    url:"https://movies-webste-landingpage.vercel.app/",
                     liveDemoIcon:<LuSquareArrowOutUpRight />,
                     liveDemoText:'View Work',
                },
                {
                    url:"https://github.com/Mightech/netflix-clone-landingpage",
                     viewCodeIcon:<TbBrandGithub />,
                     viewCodeText:'View Code'
                }
                 
           
            ]
        },
        {
            image:'/Neon Purple MacBook Portfolio Mockup.png',
            title:'Portfolio Website ',
            subTitle:'My personal portfolio showcasing skills and projects, built with React and CSS. Fully responsive with a clean design.',
            html:'REACT',
            css:'CSS',
              javascript:"FIGMA",
            figma:"GITHUB",
             frontend:"Frontend",
            links:[
                {
                    url:"https://mighty-portfolio.vercel.app",
                     liveDemoIcon:<LuSquareArrowOutUpRight />,
                     liveDemoText:'View Work',
                },
                {
                    url:"https://github.com/Mightech/MightyPortfolio",
                     viewCodeIcon:<TbBrandGithub />,
                     viewCodeText:'View Code'
                }
                 
           
            ]
        },
        {
            image:'/temperature-converter-dark-background.png',
            title:'Temp Conv Web App ',
            subTitle:'My temp conversion web app showcasing skills and projects, built with HTML, CSS, and vanilla JavaScript. Fully responsive with a clean design.',
            html:'HTML',
            css:'CSS',
                frontend:"Frontend",
            javascript:'JAVASCRIPT',
            figma:"GITHUB",
            links:[
                {
                    url:"https://temp-conversion-two.vercel.app",
                     liveDemoIcon:<LuSquareArrowOutUpRight />,
                     liveDemoText:'View Work',
                },
                {
                    url:"https://github.com/Mightech/temp-conversion",
                     viewCodeIcon:<TbBrandGithub />,
                     viewCodeText:'View Code'
                }
                 
           
            ]
            
        },
        {
            image:'/ales-nesetril-Im7lZjxeLhg-unsplash.jpg',
            title:'Loading....',
            subTitle:'My personal portfolio showcasing skills and projects, built with HTML, CSS, and vanilla JavaScript. Fully responsive with a clean design.',
            html:'HTML',
            css:'CSS',
             frontend:"Frontend",
            javascript:'JAVASCRIPT',
            figma:'FIGMA',
            liveDemoIcon:<LuSquareArrowOutUpRight />,
            liveDemoText:'View Work',
            viewCodeIcon:<TbBrandGithub />,
            viewCodeText:'View Code'
        },
    ]
    const[mouseEnter, setMouseEnter]= useState(false)
  return (
      <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={2.0}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.10}
        >
    <div className='project-wrapper'id='projectz'>
        <div className='project-wrapper-text-holder'>
             <div className='project-wrapper-text-holder-title'style={{fontFamily:"Poppins"}}><h1>My <j style={{color:"rgb(124,59,237)"}}>Projects</j></h1></div>
            <div className='project-wrapper-text-holder-subtitle'><h4>A selection of projects that demonstrate my skills in frontend development and UI design.</h4></div>
        
        </div>
           <div className='project-wrapper-box-holder'>
            <div className="project-wrapper-box-main-holder">
                {projectData.map((project, index)=>(
                <div className='project-first-box'key={index}>
                    <div className='project-first-box-img 'onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}><img src={project.image} alt="" className='image'/>
                    {
                        mouseEnter ? <div className='small-box'><h5>{project.frontend}</h5></div> : ""
                    }
                 
                    </div>
                    <div className='project-first-box-info-holder'>
                        <div className='box-info-holder-title'><h2>{project.title}</h2></div>
                        <div className='box-info-holder-subtitle'><p>{project.subTitle}</p></div>
                        <div className='programming-language'>
                            <div className='html'>{project.html}</div>
                            <div className='html'>{project.css}</div>
                            <div className='html'>{project.javascript}</div>
                            <div className='html'>{project.figma}</div>
                        </div>
                       
{project.links && (
    <div className='box-info-holder-buttons'>
        {project.links.map((link, index) => (
            <div
                className={link.liveDemoText ? 'live-demo-btn' : 'view-code-btn'}
                key={index}
            >
                <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='a-tag'
                    style={{textDecoration:"none"}}
                >
                    <p >
                        {link.liveDemoIcon || link.viewCodeIcon}
                    </p>

                    <p>
                        {link.liveDemoText || link.viewCodeText}
                    </p>
                </a>
            </div>
        ))}
    </div>
)}

                    </div>
                </div>
                ))}
            </div>
           </div>
      
    </div>
    </AnimatedContent>
  )
}

export default Myproject
