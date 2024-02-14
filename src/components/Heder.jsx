import styled  from "styled-components";

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
color: white;
padding: 0.25rem 1 rem;
`;

const Logo = styled.p`
color:red;
font-size: 5rem;
`;

const SingInButton = styled.button`
background: red;
color: white;
pading: 1rem 2rem;
border-radius: 0.5rem;
`;

const UserPanel = styled.div`
display: flex;
gap: 0.5rem;
justify-content: center
`;

export default function Header(props){
    const {loggedUser} = props
    return(<>
    <HeaderContainer>
        <Logo>WİTFLİX</Logo>
        {loggedUser ?
        <UserPanel><p>S</p><p>N</p></UserPanel>
        :
        <SingInButton>SingInButton</SingInButton>
        }
    </HeaderContainer>
        </>)
}