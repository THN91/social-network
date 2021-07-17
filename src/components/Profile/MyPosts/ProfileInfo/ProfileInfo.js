import React from "react";

import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import Status from "./Status";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={props.profile.photos.large} alt="avatar"/>
                <div>
                    <div>{props.profile.fullName}</div>
                    <Status status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;