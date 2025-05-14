import React from "react";
import "../styles/landing.css";
import ProfileImage from "./ProfileImage";

const NameCard = () => {
    return (
        <div className="profile container">
            <ProfileImage />
                <div className="name-card">
                    <h1>Katjana Gora</h1>
                    <div className="name-card-content">
                        <p> BS Computer Science <br />
                            Minor in Data Science <br />
                            Simmons University <br />
                        </p>
                    </div>
                </div>
            </div>
        );
    }   
    
export default NameCard;
// Compare this snippet from my-app/src/components/Navbar.jsx:
// import React from "react";
// import "../styles/landing.css";