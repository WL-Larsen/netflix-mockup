import styled from "styled-components";
import PlayButton from "./PlayButton";
import MoreInfo from "./MoreInfo";

const Hero = styled.div` 
width: 100%;
aspect-ratio: 2/1;
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 5rem;
`;

const VideoFrame = styled.video`
width: 100%;
/* margin-top: -92px; */
position: absolute;
top: -90px;
left: 0;
right: 0px;
z-index: 1;
`;

const MovieTitle = styled.p`
font-size: 3rem;
font-weight: bold;
margin: 0;
`;

const MovieDesc = styled.p`
font-size: 1rem;
align-items: center;
justify-content: flex-start;
width: 70%;
`; 

const MovieDetails = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
align-items: flex-start;
justify-content: center;
z-index: 999;
`;

const Buttons = styled.div`
display: flex;
gap: 1rem;
`;



export default function Promote(){
    return (
        <Hero>
            <VideoFrame  autoPlay loop>
            <source src="http://localhost:5173/src/assets/videos/Fubar.mp4" type="video/mp4" />
            </VideoFrame>
            <MovieDetails>
                <MovieTitle>FUBAR</MovieTitle>
                <MovieDesc>
                    When a father and daughter learn that they’ve each secretly been working as CIA Operatives for years, they realize their entire relationshiphas been a lie and they truly don’t know one another at all. Forced to team up as partners, FUBAR tackles universal family dynamics set against a global backdrop of spies, fantastic action and humor.
                    </MovieDesc>
                    <Buttons>
                <PlayButton />
                <MoreInfo />
                </Buttons>
            </MovieDetails>
            
            
        </Hero>
    )
}