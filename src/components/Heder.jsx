import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled  from "styled-components";
import NavMenu from "./NavMenu";

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
color: white;
padding: 0.25rem 1 rem;
align-items: center;
position: absolute;
width: 100%;
top: 0;
left: 0;
z-index: 999;

`;

const Logo = styled.p`
color:red;
font-size: 3rem;
margin: 1rem;
font-weight: bold;

`;

const SingInButton = styled.button`
background: white;
color: black;
padding: 1rem 2rem;
border-radius: 0.5rem;
font-weight: 600px;
`;

const UserPanel = styled.div`
display: flex;
gap: 1.5rem;
justify-content: center;
font-size: 1.4rem;
align-items: center;
padding-right: 15px;
`;

const Avatar = styled.img`
border-radius:0.3rem;
width:40px;
object-fit: cover;
aspect-ratio:1/1;
`;

const UserName = styled.p`
font-size: 1.5rem;
`;

export default function Header(props){
    const {loggedUser} = props;


    return(
    <HeaderContainer>
        <Logo>WİTFLİX</Logo>
        {loggedUser ?
        (<>
            <NavMenu />

            <UserPanel>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <UserName>{loggedUser.nickname}</UserName>
            <FontAwesomeIcon icon={faBell} />
            <Avatar src={loggedUser.avatar} />     
            </UserPanel></>) : 
            (<SingInButton>Sing In</SingInButton>)
        }
    </HeaderContainer>
        )
}