import React from 'react'
import "./about.css"

function About() {
    return (
        <>
            <div className="About_container" id="about">
                <div className="about-text-letter">S</div>

                <div className="About_content">
                    <h1>About Me</h1>
                    <p className="About_para">
                        Hi, I'm Shivam! I'm a <b style={{ color: "red" }}>MERN stack developer</b> with a real passion for bringing web projects to life. I handle both the frontend and backend — making sure things are responsive and visually stunning with React, HTML, CSS, JavaScript, Node js and Express — and the backend, ensuring a seamless, high-performance experience. It's all about creating websites that truly shine.
                    </p>
                    <div className="about-info">
                        <div className="info-block">
                            <span className="label">Age:</span>
                            <span className="value">18</span>
                        </div>
                        <div className="info-block">
                            <span className="label">Email:</span>
                            <span className="value">shivamgoel8383@gmail.com</span>
                        </div>
                    </div>

                    <div className="about-info">
                        <div className="info-block">
                            <span className="label">Phone:</span>
                            <span className="value">9718016115</span>
                        </div>
                        <div className="info-block">
                            <span className="label">Place:</span>
                            <span className="value">Delhi</span>
                        </div>
                    </div>

                    <div >
                        <button className="btn">
                            Resume
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
