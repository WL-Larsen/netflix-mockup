import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 0.3rem;
  color: black;
  background: white;
  padding: 1rem;
`;

const ButtonText = styled.span`
  margin-left: 1rem;
`;

export default function PlayButton() {
  return (
    <Button>
      <FontAwesomeIcon icon={faPlay} />
      <ButtonText>Play</ButtonText>
    </Button>
  );
}
