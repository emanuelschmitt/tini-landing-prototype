import React from "react";
import styled from "styled-components";

const ContentModule = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const TextContent = styled.div`
  padding: 2rem;
  max-width: 100%;
  font-size: 1.4vmax;
  font-weight: 300;
  ${props => props.columnCount && `column-count: ${props.columnCount};`}
  ${props => props.columnGap && `column-gap: ${props.columnGap}`}
`;

function TextModule({ children, columnGap, columnCount }) {
  return (
    <ContentModule>
      <TextContent columnGap={columnGap} columnCount={columnCount}>
        {children}
      </TextContent>
    </ContentModule>
  );
}

export default TextModule;
