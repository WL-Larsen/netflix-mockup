import Header from "../components/Heder"

export default function Browse(props){
    const {loggedUser} = props

    return(<div>
        <Header loggedUser={loggedUser}/>
    <h1>{loggedUser.nickname} welcome to Browse pages</h1>
    </div>)
}

