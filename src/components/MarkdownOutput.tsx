import styled from "styled-components";
import Markdown from "react-markdown";

const OutputContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
`;

const StyledText = styled.text`
  font-family: Arial, Helvetica, sans-serif;
`;

const MarkdownOutput = ({ markdown }) => {
  return (
    <OutputContainer>
      <StyledText>
        <Markdown>{markdown}</Markdown>
      </StyledText>
    </OutputContainer>
  );
};

export default MarkdownOutput;
