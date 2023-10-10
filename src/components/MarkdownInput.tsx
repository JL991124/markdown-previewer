import { useEffect, useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1px;
`;

const StyledTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  resize: none;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
`;

interface markdownProps {
  defaultInput: string;
  onEdit: (text: string) => void;
}

const MarkdownInput: React.FC<markdownProps> = ({ defaultInput, onEdit }) => {
  const [inputedText, setInputedText] = useState(defaultInput);

  useEffect(() => {
    onEdit(inputedText);
  }, [inputedText]);

  return (
    <InputContainer>
      <StyledTextArea onChange={(e) => setInputedText(e.target.value)}>
        {inputedText}
      </StyledTextArea>
    </InputContainer>
  );
};

export default MarkdownInput;
