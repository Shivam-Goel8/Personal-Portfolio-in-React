import { useState } from "react";
import "./contact.css";

function Contact() {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowSuccess(true);

        // Hide after 3 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);

        e.target.reset(); // clear form
    };

    return (
        <div className="contact-container" id="contact">
            <h1 className="contact_head">Get in Touch</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" required placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <input type="email" required placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <textarea required placeholder="Your Message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>

            {showSuccess && (
                <div className="popup-message">✅ Message sent successfully!</div>
            )}

            <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
}

export default Contact;
