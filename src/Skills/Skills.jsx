// src/components/Skills.js

import React from 'react';
import './skills.css';

function Skills() {
    const icons = {
        uiux: '🎨',
        webDesign: '🌐',
        mobileApp: '📱',
        graphicDesign: '🖼️',
        figma: '🔵',
        html: 'HTML',
        css: 'CSS',
        javascript: "JS",
        bootstrap: '🅱️',
        react: '⚛️',
        nodejs: '🟢',
        express: '⚡',
        mongodb: '🍃',
    };

    const skills = [
        { id: 1, name: 'HTML 5', icon: icons.html },
        { id: 2, name: 'CSS 3', icon: icons.css },
        { id: 8, name: 'JavaScript', icon: icons.javascript },
        { id: 3, name: "Bootstrap", icon: icons.bootstrap },
        { id: 4, name: 'React', icon: icons.react },
        { id: 5, name: 'Node js', icon: icons.nodejs },
        { id: 6, name: 'Express', icon: icons.express },
        { id: 7, name: 'Mongo DB', icon: icons.mongodb },
    ];

    return (
        <>
            <div className="container_skill" id='container_skill'>
                <div className="skill_heading">
                    My Top Skills
                </div>
                <p className='line_skill'>
                    Here I can do work and understanding with my processed skills:
                </p>
                <hr className="underline" />
            </div>

            <div className="skills-grid-container">
                <div className="skills-grid">
                    {skills.map(skill => (
                        <div key={skill.id} className="skill-item">
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-name">{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Skills;