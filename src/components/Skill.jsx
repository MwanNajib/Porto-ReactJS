import React from 'react';
import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaCss3Alt, FaLaravel, FaGit, FaVuejs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si";



function Skill() {
    return (
        <div className='bg-dark text-light py-5' id='skill'>
            <div className='wrapper'>
                <h2 className='mb-3'>Skills</h2>
                <h4>Programming Language & Tools</h4>
                <p>Here are Programming Language & Tools which I have used in web development projects</p>
                <div className="skills">
                    <FaHtml5 /><FaCss3Alt /><SiJavascript /><FaReact /><FaVuejs />
                    <FaBootstrap /><FaLaravel /><FaPhp />
                    <FaGit /><VscVscode />
                </div>
            </div>
        </div>
    );
}

export default Skill;
