import "./project.css"
import img from "../assests/dashboard.png"
import imgb from "../assests/mynt.jpg"
import imgc from "../assests/weather.png"
function Projects(){
    return (
        <>
            <div id="work">

                <div className="heading">Recents Projects</div>
                <hr className="underline" />
                <div class="container">
                    <div class="card">
                        <div class="img-container">
                            <img src={img} alt="Placeholder Project Image" />
                        </div>
                        <div class="card-details">
                            <h2>Dashboard App</h2>
                            <p>This project features a fully functional admin dashboard built with the React. It includes data visualization, order and product management, and role-based access control. The frontend is designed for a seamless and intuitive user experience, while the backend ensures efficient API management.</p>
                            <a href="https://shivam-goel8.github.io/DashboardApp/" target="_blank" className="view">view</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="img-container">
                            <img src={imgb} alt="Placeholder Project Image" />
                        </div>
                        <div class="card-details">
                            <h2>Myntra Clone</h2>
                            <p>This project is a fully responsive Myntra-inspired e-commerce platform built with the React. It features user dynamic product listings, a shopping cart, and order management. The frontend offers an intuitive and engaging shopping experience, while secure data management, and seamless integration of core e-commerce functionalities.</p>
                            <a href="https://shivam-goel8.github.io/" target="_blank" className="view">view</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="img-container">
                            <img src={imgc} alt="Placeholder Project Image" />
                        </div>
                        <div class="card-details">
                            <h2>Weather App</h2>
                            <p>This project is a fully responsive weather application built with modern web technologies like react. It fetches real-time weather data from external APIs and displays current conditions, forecasts, and location-based updates. The user-friendly interface ensures an intuitive experience, while the backend handles API integration and data processing efficiently.</p>
                            <a href="https://shivam-goel8.github.io/Weather-App/" target="_blank" className="view">view</a>
                        </div>
                    </div>

                    {/* <div class="card">
                        <div class="img-container">
                            <img src="" alt="" />
                        </div>
                        <div class="card-details">
                            <h2></h2>
                            <p>.</p>
                        </div>
                    </div> */}


                </div>
            </div>
        </>
    )
}

export default Projects