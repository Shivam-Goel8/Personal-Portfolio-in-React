import { useState } from "react";
import "./education.css";

function Education() {
    const [selected, setSelected] = useState("10th");

    const handleClick = (value) => {
        setSelected(value);
    };

    return (
        <>
        <h1 className="edu_head">Education </h1>
            <div className="Edu_container">
                <div className="box-one">
                    <div
                        className={`tab ${selected === "10th" ? "active" : ""}`}
                        onClick={() => handleClick("10th")}
                    >
                        10th
                    </div>
                    <div
                        className={`tab ${selected === "12th" ? "active" : ""}`}
                        onClick={() => handleClick("12th")}
                    >
                        12th
                    </div>
                    <div
                        className={`tab ${selected === "Bachelors" ? "active" : ""}`}
                        onClick={() => handleClick("Bachelors")}
                    >
                        Bachelors
                    </div>
                </div>

                <div className="box-second">
                    {selected === "10th" && <p> Successfully completed my secondary education at Lilawati Vidya Mandir , building a strong academic foundation</p>}
                    {selected === "12th" && <p>Successfully completed my 12th standard at GSBV Gokhle Marg, specializing in Commerce</p>}
                    {selected === "Bachelors" && <p>B.Com (Hons) degree from Delhi University, while independently building my expertise in MERN web development </p>}
                </div>
            </div>
        </>
    );
}

export default Education;