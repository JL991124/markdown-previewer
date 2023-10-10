import styled from "styled-components";

const StyledDiv = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 0px;

  background: #212121;
  color: #ffffff;
  float: left;
`;

const StyledH1 = styled.h1`
  margin-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
  margin-left: auto;
  margin-right: 10px;
  width: 150px;
  font-size: medium;
  border-radius: 5px;
  border: none;
`;

interface showGuideProps {
  isShowing: boolean;
  onToggle: () => void;
}

const Header: React.FC<showGuideProps> = ({ isShowing, onToggle }) => {
  return (
    <StyledDiv>
      <StyledH1>Markdown Previewer</StyledH1>
      <Button onClick={() => onToggle()}>
        {isShowing ? "Hide" : " Show"} Cheat Sheet
      </Button>
    </StyledDiv>
  );
};

export default Header;
