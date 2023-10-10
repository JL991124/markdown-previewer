import styled from "styled-components";

const GuideContainer = styled.div`
  margin: 3px;
  padding: 0.25em 1em;
  border: 2px solid #454545;
  border-radius: 3px;
`;

const StyledH3 = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
`;

const MarkdownGuide = () => {
  return (
    <GuideContainer>
      <StyledH3>Markdown Cheat Sheet</StyledH3>
      <li>
        <code># H1</code>
      </li>
      <li>
        <code>## H2</code>
      </li>
      <li>
        <code>### H3</code>
      </li>
      <li>
        <code>**bold**</code>
      </li>
      <li>
        <code>*italic*</code>
      </li>

      <li>
        <code>[Link](http://a.com)</code>
      </li>
      <li>
        <code>![Image](http://url/a.png)</code>
      </li>
      <li>
        <code>`inline code`</code>
      </li>
      <li>
        <code>```block code```</code>
      </li>
      <li>
        <code>- list item</code>
      </li>
    </GuideContainer>
  );
};

export default MarkdownGuide;
