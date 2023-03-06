import { Heading } from "@chakra-ui/react";
import React from "react";
import top from "./home.module.css";

const Home = ({ home }) => {
    return (
        <div id="home" ref={home} className="nav-menu">
            <div className={top.box}>
                <Heading as="h4" size="md" fontWeight={400}>
                    Hello I'm
                </Heading> 
                <Heading as="h2" id="user-detail-name" size="2xl" fontWeight={400}>
                    TUSHIT SAXENA
                </Heading>
                <img
                    src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&pause=1000&color=F7F7F7&center=true&vCenter=true&width=435&lines=+Full+Stack+Web+Developer;MERN+Stack"
                    alt="Typing SVG"
                />
                <h4 id="user-detail-intro" className={top.h4}>
                    I am a Full Stack Developer, passionate about building digital
                    products that improve everyday experience for people. 
                    <span> 
                        I love to work on exciting projects that test what I've learnt,
                        whilst being exposed to the power and potential of the ever-evolving
                        technologies around us.
                    </span>
                    I have a specialization in developing websites and web applications
                    using HTML, CSS, JavaScript, React, and Node.js.
                </h4>
            </div>
        </div>
    );
};

export default Home;


