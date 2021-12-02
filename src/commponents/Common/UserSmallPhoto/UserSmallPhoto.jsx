import React from "react";
// import UserSmallPhoto from "./UserSmallPhoto";
import userPhoto from "../../../assets/images/avatar.png";
import Preloader from "../Preloader/Preloader";

const UserSmallPhoto = ({profile}) => {
    // Необходимое условие без которого будет падать ошибка из за того что  profile не успеет обработаться
    if (!profile) {
        return <div> . . .</div>
      }
  return (
    <div >
        <img src={profile.photos.small || userPhoto} />     
    </div>
  );
};

export default UserSmallPhoto