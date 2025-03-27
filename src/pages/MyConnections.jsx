import React, { useState, useEffect } from 'react';
import './Connections.css';
import Header from './Header';

const MyConnections = () => {
    const [connections, setConnections] = useState([]);

    useEffect(() => {
        const savedConnections = JSON.parse(localStorage.getItem('connections')) || [];
        setConnections(savedConnections);
    }, []);

    return (
        <div>
            <Header/>
        <div className="connections-container">
            <div className="connections-list">
                <h2>My Connections</h2>
                {connections.length === 0 ? (
                    <p>No connections yet.</p>
                ) : (
                    connections.map(person => (
                        <div key={person.id} className="connection-card">
                            <img src={person.profilePicture} alt={person.name} />
                            <div className="connection-info">
                                <h3>{person.name}</h3>
                                <p>{person.headline}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
        </div>
    );
};

export default MyConnections;
