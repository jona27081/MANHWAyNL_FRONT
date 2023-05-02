import React from 'react';
import '../styles/about.css';
import profileImage from '../img/104945335.png';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-image">
                <img src={profileImage} alt="Profile" />
            </div>
            <div className="profile-details">
                <h1 className="profile-name">Jonathan Arath Ojeda Rosas</h1>
                <h2 className="profile-matricula">MATRICULA: 20006736</h2>
                <p className="profile-description">

                    ¡Bienvenido al mejor sitio para ver clips de Dragon Ball! Aquí encontrarás una gran colección 
                    de los mejores momentos de esta icónica serie de anime. 
                </p>
            </div>
        </div>
    );
}

export default Profile;