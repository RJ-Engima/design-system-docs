import React from "react";
import { useEffect, useState } from "react";
function Scroller(e) {
  //avtive state
  // e.preventDefault();
  const [alignment, setAlignment] = React.useState("web");
  // active state

  // acttive state
  // testing fixed header
  const fixedText = document.getElementById("myHeader");
  const whenNotFixed = document.getElementById("myHeader");

  const [headerText, setHeaderText] = useState(whenNotFixed);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

    return null ;
}

export default Scroller;
