import Header from "../components/Heder";

export default function Main(loggedUser){
    return(<div>
    <Header loggedUser={loggedUser}/>
    <h1>Main pages</h1>
    </div>)
}