export default function Browse(props){
    const {loggedUser} = props

    return(<div>
    <h1>{loggedUser.nickname} welcome to Browse pages</h1>
    </div>)
}

