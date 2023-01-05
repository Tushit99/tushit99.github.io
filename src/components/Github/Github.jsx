import React from 'react'
import git from "./github.module.css"


const Github = () => {
    return (
        <div className={git.box}>
            <img src="https://streak-stats.demolab.com/?user=tushit99&theme=default" alt="" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tushit99&layout=compact" alt="" />
            <img src="https://github-readme-stats.vercel.app/api?username=tushit99&show_icons=true&hide=contribs,prs&cache_seconds=86400&theme=default" alt="" /> 
        </div>  
    )
}

export default Github