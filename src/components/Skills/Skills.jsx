import React from 'react'
import skl from "./Skills.module.css"
import { SiJavascript } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { FaNpm } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { SiChakraui } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { Heading } from '@chakra-ui/react'
 


const Skills = ({skill}) => { 
    return (
        <div  id="skills" ref={skill} className={skl.box}>
            <Heading as='h2' size='2xl' color={"white"} fontWeight={400}> Tech Stacks </Heading>
            <div className={skl.sklimg}>
                <div id={skl.box2} className="skills-card" >
                    <SiJavascript size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> Javascript </p> 
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <SiHtml5 size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> HTML 5 </p>
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <SiCss3 size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> CSS 3 </p>
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <SiReact size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> React </p>
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <IoLogoNodejs size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> Node js </p>
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <SiMongodb size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> Mongodb </p>
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <SiExpress size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> Express </p>
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <SiRedux size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> Redux </p>
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <FaNpm size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> Npm </p>
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <BsGithub size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> Github </p>
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <SiChakraui size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> Chakra-UI </p>
                </div>
                <div id={skl.box2}  className="skills-card" >
                    <SiNetlify size="50px" className='skills-card-img' id={skl.icons} />
                    <p className="skills-card-name"> Netlify </p>
                </div>
            </div>
        </div>
    )
}

export default Skills



