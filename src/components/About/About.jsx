import React, { useState } from "react";
import about from "./about.module.css";
import img from "../Image/tushitgo.png";
import { Button } from "@chakra-ui/react";
import resumeme from "../Image/resumeme.pdf";

const About = () => {
  const [load, setLoad] = useState(false);

  const handleShowing = (url) => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
    window.open(url, "_blank");
  };

  return (
    <div className={about.box}>
      <h4> Get to Know </h4>
      <h1> About </h1>
      <div className={about.main}>
        <div className={about.picspace}>
          <div className={about.picbox}>
            <img src={img} alt="Profile-Ing" className={about.mypic} />
            <div className={about.picback}></div>
            <div className={about.picback2}></div>
          </div>
        </div>
        <div className={about.aboutdetail}>
          <p>
            Hi Everyone, I am Tushit Saxena from Jharkhand, Jamshedpur.I
            graduated from Meerut, Uttar Pradesh, with a Bachelor of Hotel
            Management degree. 
          </p>
          <div>
            <a href={resumeme} download>
              <Button
                isLoading={load}
                loadingText="Downloading"
                bg="whiteAlpha.100"
                color="black"
                boxShadow="md"
                variant="solid"
                w="80%"
                m="20px auto"
                textAlign="center"
                _hover={{
                  boxShadow: "outline",
                }}
              >
                download
              </Button>
            </a>
            <Button
              bg="whiteAlpha.100"
              color="black"
              boxShadow="md"
              variant="solid"
              w="80%"
              m="20px auto"
              textAlign="center"
              _hover={{
                boxShadow: "outline",
              }}
              onClick={() => {
                handleShowing(
                  "https://drive.google.com/file/d/1QDtKhJGLNZtCdd9Ia-8mJ1tMNs5fm-hg/view?usp=sharing"
                );
              }}
            >
              {" "}
              Resume{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
