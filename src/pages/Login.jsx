import Header from "../components/Heder";

export default function Login({loggedUser}){
    return(<div>
    <Header loggedUser={loggedUser}/>
    <h1>Login pages</h1>
    </div>)
}