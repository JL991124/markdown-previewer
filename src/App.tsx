import { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";

const VertiaclDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

const HorizontalItem = styled.div`
  width: 50%;
`;

function App() {
  const [markdown, setMarkdown] = useState("# Hello World");
  const [showGuide, setShowGuide] = useState(false);

  const toggleGuide = () => {
    setShowGuide(!showGuide);
    console.log(showGuide);
  };

  const editMarkdown = (text: string) => {
    setMarkdown(text);
  };

  return (
    <VertiaclDiv>
      <Header isShowing={showGuide} onToggle={toggleGuide} />
      {showGuide ? <MarkdownGuide /> : <></>}
      <HorizontalDiv>
        <HorizontalItem>
          <MarkdownInput defaultInput={markdown} onEdit={editMarkdown} />
        </HorizontalItem>
        <HorizontalItem>
          <MarkdownOutput markdown={markdown} />
        </HorizontalItem>
      </HorizontalDiv>
    </VertiaclDiv>
  );
}

export default App;
