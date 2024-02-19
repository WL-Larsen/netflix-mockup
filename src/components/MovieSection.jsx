import styled from "styled-components";

const MovieDiv = styled.div`
  padding: 0.2rem 0;
`;

const Title = styled.h3`
  color: white;
  font-weight: bold;
`;

const MoviesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


const Movie = styled.img`
width: 12%;

`;

export default function MoviesSection(title, movies) {
  return (
    <MovieDiv>
      <Title>{title}</Title>
      <MoviesContainer>
        {movies.map((item,index) =>{
            return(<Movie srv={item.post} key={index} />)
        })}
      </MoviesContainer>
    </MovieDiv>
  );
}
