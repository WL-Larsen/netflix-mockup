import './Profile.css'

export default function Profile(props){
    const {profile} = props
    return(<div className="profile-card">
        <img src={profile.avatar} />
        <h2>{profile.nickname}</h2>
    </div>)
}