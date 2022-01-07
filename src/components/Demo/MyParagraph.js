import React from "react";

function MyParagraph(props) {
    console.log('MyParagraph');
  return <div>{props.children}</div>;
}

export default MyParagraph;
