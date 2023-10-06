import React from "react";
import styled from "@emotion/styled";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Base = styled(SyntaxHighlighter)`
  border-radius: 3px;
  padding-left: 20px !important;
  padding-top: 20px !important;
`;

const Code =  ({ children }) => {
  return (
    <Base language="javascript" style={docco}>
      {children}
    </Base>
  );
};

export default Code;
