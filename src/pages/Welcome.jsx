import { useState } from "react";
import { profiles } from "../profiles";
import Profile from "../components/Profile";
import '../components/Profile.css'

export default function Welcome(props){
    const [profileList, setProfileList] = useState(profiles)
    const {changeUser} = props;

    return(<div >
    <h1>Who's Wacthing?</h1>
    <div className="profile-container">
        {profileList.map((item, index)=>{
        return(<Profile changeUser={changeUser} 
            key={index} 
            profile={item} />)
    })}</div>
    </div>)
}