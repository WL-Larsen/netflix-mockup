import { useHistory } from "react-router-dom"
import Header from "../components/Heder"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import Promote from "../components/Promote"

export default function Browse(props){
    const {loggedUser} = props
    const history = useHistory()

    if(!loggedUser) {
        return(
            <Redirect to="/login" />
        )
    }
    

    return(
    <div>
        <Promote />
        <Header loggedUser={loggedUser}/>  
        <h1>{loggedUser.nickname} welcome to Browse pages</h1>
    </div>)
}

