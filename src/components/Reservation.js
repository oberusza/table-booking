import React, { useState } from "react";

function Reservation({ onSuccess }) {
    
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [step, setStep] = useState(1);
    
    const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
    const isPhoneValid = (phone) => {
        return /^\d{10}$/.test(phone);
    };
    
    const isDateValid = (date) => {
        return /\d{4}-\d{2}-\d{2}/.test(date);
    };
    
    const isTimeValid = (time) => {
        return /\d{2}:\d{2}/.test(time);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && guests > 0 && agreed) {
            setStep(2);
        } else {
            alert('Please fill in all required fields and accept the terms of service.')
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setStep(0);
        onSuccess();
    };
    
    const handleConfirm = (e) => {
        e.preventDefault();
        if (!isEmailValid(email)) {
            alert('Please enter a valid email address. (some@th.ing)')
        } else if (!isPhoneValid(phone)) {
            alert('Please enter a valid phone number. (0123456789)')
        } else if (!isDateValid(date)) {
            alert('Please enter a valid date. (2023.04.22)')
        } else if (!isTimeValid(time)) {
            alert('Please enter a valid time. (12:25)')
        } else {
            setStep(3);
        }
    };
     
    const handleBack = (e) => {
        e.preventDefault();
        setStep(1);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setStep(0);
        onSuccess();
    };
    
    return (
        <div className="reservation">

            {step === 1 && (
                <form onSubmit={handleSubmit}>
                    <h2>Reservation 1/3</h2>
                    <p>Book a table at Little Lemon Restaurant. Our restaurant is suitable for lunch, dinner, family, friend or company events.</p>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                    <label htmlFor="time">Time:</label> <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    <label htmlFor="guests">Number of guests:</label>
                    <input type="number" id="guests" min="0" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} required />
                    <label htmlFor="email">Email address:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="phone">Phone number:</label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <label htmlFor="agreed">
                        <input className="agreed" type="checkbox" id="agreed" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required />
                        <span className="agreed-text">By checking this box, you are agreeing to our terms of service</span>
                    </label>
                    <div className="form-buttons">
                        <button className="button-olive" type="submit">RESERVE</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            )}

            {step === 2 && (
                <div className="flex form-summary">
                    <h2>Reservation 2/3</h2>
                    <p>Please check the correctness of the table reservation data!</p>
                    <p>Name: {name}</p>
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                    <p>Number of guests: {guests}</p>
                    <p>Email address: {email}</p>
                    <p>Phone number: {phone}</p>
                    <div className="form-buttons">
                        <button className="button-olive" onClick={handleConfirm}>OK</button>
                        <button onClick={handleBack}>Back</button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="flex">
                    <h2>Reservation 3/3</h2>
                    <p className="text-center">Successful table reservation!</p>
                    <div className="circle">&#10003;</div>
                    <p className="text-center">We look forward to seeing you at the specified time!</p>
                    <div className="form-buttons">
                        <button className="button-olive" onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Reservation;

