import React from 'react';
import '../LandingPage/LandingPage.css'

const landingPage = () => {
    return(
        <div className="vm">
            <h1>Valar Morghulis</h1>
            <p>"This Quiz is Dark and full of spoilers"</p>
            <div>
                <a href="/quiz">Play</a>
            </div>
        </div>
    )
}

export default landingPage;