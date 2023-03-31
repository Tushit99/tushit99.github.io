import React, { useEffect, useState } from "react";
import nav from "./Navbar.module.css";
import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import res from "../../components/Image/resumeme.pdf";

import { FaBook } from "react-icons/fa";
import mylogo from "../../components/Image/navname.png";
import { Button } from "@chakra-ui/react"; 
import { HiOutlineDownload } from 'react-icons/hi'

const Navdetail = ({ home, about, skill, contact, project }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.pageYOffset);
    });
  }, []);

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1QDtKhJGLNZtCdd9Ia-8mJ1tMNs5fm-hg/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div>
      <div
        id="nav-menu"
        className={nav.topnav}
        style={{
          backgroundColor: scroll > 50 ? "#000000" : "unset",
          borderRadius: scroll > 50 ? "2px" : "0px",
          boxShadow: scroll > 50 ? "0px 1px 10px #095dbc" : "0 0 0 red",
        }}
      >
        <div className={nav.namelogo}> 
          <img src={mylogo} alt="myName-Img" />
        </div>
        <div className={nav.topoption}>
          <div
            className="nav-link home"
            onClick={() => home.current.scrollIntoView({ behavior: "smooth" })}
          >
            Home
          </div>
          <div
            className="nav-link about"
            onClick={() => about.current.scrollIntoView({ behavior: "smooth" })}
          >
            About
          </div>
          <div
            className="nav-link skills"
            onClick={() => skill.current.scrollIntoView({ behavior: "smooth" })}
          >
            Skill
          </div>
          <div
            className="nav-link projects"
            onClick={() =>
              project.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Project
          </div>
          <div
            className="nav-link contact"
            onClick={() =>
              contact.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </div>
          <Button rightIcon={<HiOutlineDownload />} _hover={{borderColor:"blue",color:"blue"}} colorScheme='white' variant='outline'>
            <a
              className="nav-link resume"
              id="resume-button-1"
              href={res}
              onClick={handleResume}
              download="Tushit_Saxena_Resume"
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
      <div className={nav.bottomNav}>
        <div className="allnavbox">
          <div
            onClick={() => home.current.scrollIntoView({ behavior: "smooth" })}
          >
            <FaHome size="20px" />
          </div>
          <div
            onClick={() => about.current.scrollIntoView({ behavior: "smooth" })}
          >
            <FaBook size="20px" />
          </div>
          <div
            onClick={() => skill.current.scrollIntoView({ behavior: "smooth" })}
          >
            <BsTools size="20px" />
          </div>
          <div
            onClick={() =>
              project.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <AiFillProject size="20px" />
          </div>
          <div
            onClick={() =>
              contact.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <RiContactsFill size="20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navdetail;
