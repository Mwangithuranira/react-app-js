import React from "react";
import { useState } from "react";
// import './profileCard.css'
//a reusable ProfileCard component in React that displays user information
const ProfileCard = ({ user }) => {
  const { name, age, bio,Image  } = user;
  return (
    <div className="profile-card">
      <img src={Image} alt={name} width={300} height={350}/>
      <div className="user-details">
        <h2>name: {name}</h2>
        <h2>age :  {age}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};


export default ProfileCard;