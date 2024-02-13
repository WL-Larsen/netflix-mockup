import { useState } from "react";
import { profiles } from "../profiles";
import Profile from "../components/Profile";
import '../components/Profile.css'

export default function Welcome(){
    const [profileList, setProfileList] = useState(profiles)
    return(<div >
    <h1>Who's Wacthing?</h1>
    <div className="profile-container">{profileList.map((item, index)=>{
        return(<Profile key={index} profile={item} />)
    })}</div>
    </div>)
}