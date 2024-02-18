import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Nav = styled.nav`
display:flex;
gap:1.5rem;
justify-content: flex-start;
width: 80%;
margin-left:2rem;
`;

export default function NavMenu() {
    return(
        <Nav>
            <Link to ="/browse">Home</Link>
            <Link to ="/browse">Tw Shows</Link>
            <Link to ="/browse">Movies</Link>
            <Link to ="/browse">New&popular</Link>
            <Link to ="/browse">MyList</Link>
            <Link to ="/browse">Browse by Language</Link>
            
        </Nav>
    )
}