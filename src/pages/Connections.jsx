import React, { useState, useEffect } from 'react';
import './Connections.css';
import peopleData from '../data/users.json';
import Header from './Header';
import { Link } from 'react-router-dom';

const Connections = () => {
    const [people, setPeople] = useState([]);
    const [connections, setConnections] = useState([]);

    useEffect(() => {
        setPeople(peopleData);
        const savedConnections = JSON.parse(localStorage.getItem('connections')) || [];
        setConnections(savedConnections);
    }, []);

    const handleConnect = (person) => {
        const isConnected = connections.some(conn => conn.id === person.id);

        if (!isConnected) {
            const updatedConnections = [...connections, person];
            setConnections(updatedConnections);
            localStorage.setItem('connections', JSON.stringify(updatedConnections));
        } else {
            const updatedConnections = connections.filter(conn => conn.id !== person.id);
            setConnections(updatedConnections);
            localStorage.setItem('connections', JSON.stringify(updatedConnections));
        }
    };

    return (
        <div>
            <Header />
            <div className="connections-container">
                <div className="people-you-may-know">
                    <h2>People You May Know</h2>
                    <Link to='/myconnections'>My Connections</Link>
                    {people.map(person => {
                        const isConnected = connections.some(conn => conn.id === person.id);

                        return (
                            <div key={person.id} className="person-card">
                                <img src={person.profilePicture} alt={person.name} className="person-pic" />
                                <p><strong>{person.name}</strong></p><br />
                                <p>{person.headline}</p><br />
                                <button 
                                    onClick={() => handleConnect(person)} 
                                    className={`connect-btn ${isConnected ? "connected" : ""}`}
                                >
                                    {isConnected ? "Connected" : "Connect"}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Connections;
