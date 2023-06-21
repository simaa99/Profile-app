import React from "react";
import "./style.css";
import PersonIcon from "../../assets/person-svgrepo-com.svg";
import AtIcon from "../../assets/at-symbol-svgrepo-com.svg";
import ChatIcon from "../../assets/chat-svgrepo-com.svg";

interface ProfileUserProps {
  name: string;
  age: number;
  speciality: string;
  imageUrl: string;
}

const ProfileUserComponent: React.FC<ProfileUserProps> = ({
  name,
  age,
  speciality,
  imageUrl,
}) => {
  return (
    <div className="profile-user-container">
      <div className="profile-user-details">
        <img src={imageUrl} alt="Profile" className="profile-user-image" />
        <div className="profile-user-icons">
          <img src={PersonIcon} alt="Icon 1" className="profile-user-icon" />
          <img src={AtIcon} alt="Icon 2" className="profile-user-icon" />
          <img src={ChatIcon} alt="Icon 3" className="profile-user-icon" />
        </div>
      </div>
      <div className="profile-user-info">
        <h2>{name}</h2>
        <div className="profile-user-age">
          <span>{age}</span>
          <span>.</span>
          <span>{speciality}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserComponent;
