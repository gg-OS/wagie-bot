import React, { useState } from 'react';

function Wagie() {
    const [message, setMessage] = useState("Wagie BOT");

    const handleClick = () => {
        setMessage("Wagie changes message")
    };

    return (
        <section>

            <div className="wagie-box">
                <h1 className="wagie-phrase">{message}</h1>
                <button onClick={handleClick} className="wagie-btn">I feel wagie!</button>
            </div>

        </section>
    )
}

export default Wagie