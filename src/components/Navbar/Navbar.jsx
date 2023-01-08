import React from 'react'
import Hamb from '../Drawer/Hamb';
import Nav from "./navbar.module.css"; 
import imm from "../Image/navname.png"

const Navbar = () => {
  return (
    <div className={Nav.box} >
      <div className={Nav.imgs}> 
        <img src={imm} alt="" />
      </div>
      <div className={Nav.optn}>
        <h3> Home </h3>
        <h3> About </h3>
        <h3> Skill </h3>
        <h3> Github </h3>
        <h3> Contact </h3> 
      </div>
        <div className={Nav.hambr}>
          <Hamb /> 
        </div>
    </div> 
  )
}

export default Navbar