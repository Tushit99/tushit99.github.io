import React from "react";
import top from "./home.module.css";

const Top = () => {
    return (
        <div className="nav-menu">
            <div className={top.box}>
                <h3 className={top.h3}>
                    Hello  I'm
                </h3>
                <h1 className={top.h1}> TUSHIT SAXENA </h1>
                <img
                    src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=4000&pause=1000&color=0003F7&width=435&lines=Full+Stack+MERN+Developer"
                    alt=""
                />
                <h4 className={top.h4}>
                    my name is Tushit Saxena and I am a Full Stack
                    Developer, passionate about building digital
                    products that improve everyday experience for
                    people. I love to work on exciting projects
                    that test what I've learnt, whilst being
                    exposed to the power and potential of the
                    ever-evolving technologies around us.
                </h4>
            </div>
        </div>
    );
};

export default Top;
