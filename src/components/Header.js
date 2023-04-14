import React, { useState } from "react";

import Restaurant_Food from "./images/restaurant_food.jpg";
import Reservation from "./Reservation";
import Main from "./Main";

const Header = () => {

    const [showReservation, setShowReservation] = useState(false);
    const [showComponents, setShowComponents] = useState(true);

    const handleReservation = () => {
        setShowReservation(true);
        setShowComponents(false);
    };

    const handleReservationSuccess = () => {
        setShowReservation(false);
        setShowComponents(true);
    };
    

    return (
        <>
            {showComponents && (
                <header>
                    <div className="introduction">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <button onClick={handleReservation} className="button-yellow">Reserve a Table</button>
                    </div>
                    <img 
                        src={Restaurant_Food}
                        alt=""
                    />
                </header>
            )}
            {showReservation && (<Reservation onSuccess={handleReservationSuccess} />)}
            {showComponents && <Main />}
        </>
    );
}

export default Header;