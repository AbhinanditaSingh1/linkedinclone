import React, { useState, useEffect } from 'react';
import './Profile.css';
import postsData from '../data/posts.json';
import peopleData from '../data/users.json';
import userPic from '/public/images/user-1.png';
import Header from './Header';
import PostCard from '../components/Card';

const Profile = () => {
    
    const [bio, setBio] = useState(localStorage.getItem('bio') || 'Student');
    const [jobTitle, setJobTitle] = useState(localStorage.getItem('jobTitle') || 'Software Engineer');
    const [editing, setEditing] = useState(false);
    const [posts, setPosts] = useState([]);
    const [people,setPeople]=useState([]);

    useEffect(() => {
        setPosts(postsData);
    }, []);

    useEffect(() => {
        setPeople(peopleData);
    }, []);

    const handleSave = () => {
        localStorage.setItem('bio', bio);
        localStorage.setItem('jobTitle', jobTitle);
        setEditing(false);
    };

    return (
        <div>
        <Header/>
        <div className="profile-container">
            <div className="profile-left">
                <div className="profile-info">
                    <img src={userPic} alt="Profile" className="profile-pic" />
                    {editing ? (
                        <>
                            <input value={bio} onChange={(e) => setBio(e.target.value)} className="edit-input" />
                            <input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="edit-input" />
                            <button onClick={handleSave} className="save-btn">Save</button>
                        </>
                    ) : (
                        <>
                            <h1>Sriya</h1>
                            <h3>{bio}</h3>
                            <h4>{jobTitle}</h4>
                            <p>Connections: 500+</p>
                            <button onClick={() => setEditing(true)} className="edit-btn">Edit Profile</button>
                        </>
                    )}
                </div>
                <div className="people-you-may-know">
                    <h3>People You May Know</h3>
                    {people.map((person) => (
                        <div key={person.id} className="person-card">
                            <img src={person.profilePicture} alt={person.name} className="person-pic" />
                            <p>{person.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="profile-main">
                <h2>My Posts</h2>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    </div>
    );
};

export default Profile;

