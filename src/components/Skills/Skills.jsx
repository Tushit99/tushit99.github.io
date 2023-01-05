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



const Skills = () => {
    return (
        <div className={skl.box}>
            <h1 className={skl.h1}> Skills  </h1>
            <div className={skl.sklimg}>
                <div className={skl.box2}>
                    <SiJavascript size="50px" className={skl.icons} />
                    <p> Javascript </p>
                </div>
                <div className={skl.box2}>
                    <SiHtml5 size="50px" className={skl.icons} />
                    <p> HTML 5 </p>
                </div>
                <div className={skl.box2}>
                    <SiCss3 size="50px" className={skl.icons} />
                    <p> CSS 3 </p>
                </div>
                <div className={skl.box2}>
                    <SiReact size="50px" className={skl.icons} />
                    <p> React </p>
                </div>
                <div className={skl.box2}>
                    <IoLogoNodejs size="50px" className={skl.icons} />
                    <p> Node js </p>
                </div>
                <div className={skl.box2}>
                    <SiMongodb size="50px" className={skl.icons} />
                    <p> Mongodb </p>
                </div>
                <div className={skl.box2}>
                    <SiExpress size="50px" className={skl.icons} />
                    <p> Express </p>
                </div>
                <div className={skl.box2}>
                    <SiRedux size="50px" className={skl.icons} />
                    <p> Redux </p>
                </div>
                <div className={skl.box2}>
                    <FaNpm size="50px" className={skl.icons} />
                    <p> Npm </p>
                </div>
                <div className={skl.box2}>
                    <BsGithub size="50px" className={skl.icons} />
                    <p> Github </p>
                </div>
                <div className={skl.box2}>
                    <SiChakraui size="50px" className={skl.icons} />
                    <p> Chakra-UI </p>
                </div>
                <div className={skl.box2}>
                    <SiNetlify size="50px" className={skl.icons} />
                    <p> Netlify </p>
                </div>
            </div>
        </div>
    )
}

export default Skills



