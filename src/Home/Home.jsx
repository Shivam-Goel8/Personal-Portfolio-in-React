import React, { useRef, useEffect } from 'react'; // Import useRef and useEffect
import image from "../assests/photo.jpg";
import { TypeAnimation } from 'react-type-animation';
import "./home.css";

function Home() {
    const sequence = [
        'Programmer', 2000,
        'Frontend Developer', 2000,
        'Backend Developer', 2000,
        'MERN Stack Developer', 2000,
    ];

    // Create refs for the elements you want to observe
    const homeLeftRef = useRef(null);
    const profileSectionRef = useRef(null);

    useEffect(() => {
        // Function to handle intersections
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add 'is-visible' class when element enters viewport
                    entry.target.classList.add('is-visible');
                    // Stop observing once it's visible if you only want the animation to play once
                    observer.unobserve(entry.target);
                }
                // If you want the animation to re-trigger when it goes out and comes back in:
                // else {
                //     entry.target.classList.remove('is-visible');
                // }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Observe the elements if they exist
        if (homeLeftRef.current) {
            observer.observe(homeLeftRef.current);
        }
        if (profileSectionRef.current) {
            observer.observe(profileSectionRef.current);
        }

        // Cleanup function: disconnect the observer when the component unmounts
        return () => {
            if (homeLeftRef.current) { // Check if ref still exists before unobserving
                observer.unobserve(homeLeftRef.current);
            }
            if (profileSectionRef.current) { // Check if ref still exists before unobserving
                observer.unobserve(profileSectionRef.current);
            }
            observer.disconnect(); // Disconnect the observer entirely
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <>
            <div className="nav_bar">
                <div className="name">
                    <p className="name_letter">S</p>hivam.
                </div>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <div className="navbar_item">
                    <a className="hover-underline" href="/">Home</a>
                    <a className="hover-underline" href="#about">About</a>
                    <a className="hover-underline" href="#work">My Project</a>
                    <a className="hover-underline" href="#container_skill">Skills & Education</a>
                    <a className="hover-underline" href="#contact">Contact</a>
                </div>
            </div>
            {/* ------------------------------------Home----------------------------------------------------- */}
            <div className="home-container">
                {/* Left Side Text */}
                {/* Attach the ref and the initial animation class */}
                <div className="home-left animate-on-scroll" ref={homeLeftRef}>
                    <p className="home-hi">Hi,</p>
                    <p className="home-name">I'm <span className="highlight">S</span>hivam</p>
                    <div className="home-animated">
                        <TypeAnimation
                            sequence={sequence}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="sociallinks">
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/Shivam-Goel8"><i className="fab fa-github"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div>
                        <button className="cv-button" onClick={() => window.open("Shivam_fronted_CV.pdf", "_blank")}>
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Right Side Photo & Rotating Circle */}
                {/* Attach the ref and the initial animation class */}
                <div className="profile-section animate-on-scroll" ref={profileSectionRef}>
                    <div className="rotating-circle">
                        <img src={image} alt="Profile" className="profile-img" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;