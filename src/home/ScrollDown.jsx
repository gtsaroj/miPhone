import React from 'react'
import { ChevronsDown } from "lucide-react"
import "./home.css";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a style={{color : "var(--body_color", borderRadius : "50px", padding: "2px", background: "var(--line)" } } href="#about" className='home__scroll-button button--flex'>
        
             <ChevronsDown style={{color : "var(--body_background)"}} size={"30"}/>
        </a>
    </div>
  )
}

export default ScrollDown
