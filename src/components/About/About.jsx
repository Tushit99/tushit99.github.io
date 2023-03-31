import React from "react";
import abt from "./About.module.css";
import { Button, Heading, Link } from "@chakra-ui/react";
import resumeme from "../Image/resumeme.pdf";
import mypic from "../Image/tushitgo.png"

const About = ({ about }) => {

  const handleOpenLink = () => {
    window.open("https://drive.google.com/file/d/1QDtKhJGLNZtCdd9Ia-8mJ1tMNs5fm-hg/view?usp=sharing", "_blank")
  }

  return (
    <div id="about" className="about section">
      <div ref={about} className={abt.box}>
        <h5> Get to Know </h5>
        <Heading as='h2' color={"white"} size='2xl' fontWeight={400}> About </Heading>
        <div className={abt.main}>
          <div className={abt.aboutdetail} >
            <p id="user-detail-intro">
              I'm a Full Stack Web Developer living in Jamshedpur, Jharkhand, with expertise in MERN stack, JavaScript, MongoDB, Frontend, and Backend development. I'm proficient in Java and SQL as well. My experience includes working with NodeJS, HTML, CSS, and Express frameworks to create visually appealing and functional applications. I'm always eager to learn new technologies and improve my skills, making me a valuable asset to any team. If you're looking for someone to help bring your ideas to life, I'd love to work with you!
            </p> 
            <div className={abt.buttonbox}>
              {/* <Link href="https://drive.google.com/file/d/1QDtKhJGLNZtCdd9Ia-8mJ1tMNs5fm-hg/view?usp=sharing" target={"_blank"} _hover={{ textDecoration: "none" }} >
                <Button colorScheme='blue' variant='solid' id="resume-button-1">
                  My Resume 
                </Button>
              </Link> */}
              <Link href={resumeme} download={"Tushit Saxena"} id="resume-button-2" onClick={handleOpenLink} _hover={{ textDecoration: "none" }} >
                <Button colorScheme='blue' border={"2px"} width="100%" _hover={{ backgroundColor: "rgb(205, 205, 255)" }} variant='outline' >
                  My Resume
                </Button>
              </Link>
            </div>
          </div>
          <div className={abt.picspace}>
            <div className={abt.circle}>
              <img src={mypic} id={abt.im2} className="home-img" alt="myimages" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
