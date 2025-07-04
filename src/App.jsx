import React, { useCallback } from 'react'; // Import useCallback
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './projects/Projects';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Fotter from './Fotter/Fotter';
import "./app.css"; // Your main application CSS
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // or 'tsparticles' for full bundle

function App() {
  // Function to initialize particles instance
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Function called after particles are loaded (optional)
  const particlesLoaded = useCallback(async (container) => {
    // console.log(container); // For debugging
  }, []);

  return (
    <div className="app-container"> {/* A main container for your entire app */}
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000", // Your black background
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: "#00bcd4", // Your accent color for particles
            },
            links: {
              color: "#0097a7", // Links between particles
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        // Apply inline styles directly to the Particles component for positioning
        style={{
          position: "fixed", // Use fixed to cover the entire viewport regardless of scroll
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Ensures particles are behind all other content
        }}
      />

      {/* Main Content Sections - these will sit on top of the particles */}
      <main className="main-content-wrapper"> {/* Wrap your content in a scrollable div */}
        <Home />  
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Fotter />
      </main>
    </div>
  );
}

export default App;