//Style
import "./style.css";

import React, { useEffect, useState } from "react";

//Component
import Board from "./Board";
//Function
import { updateURLParameter } from "./helpers";

function Puzzle() {
  const [imgUrl, setImgUrl] = useState("");

  /**
   * @Octowl
   *
   * You're over complicating pulling the image url from the query params
   *
   * https://reactrouter.com/web/example/query-parameters
   */
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"));
    }
  }, []);

  const handleImageChange = (e) => {
    setImgUrl(e.target.value);
    window.history.replaceState(
      "",
      "",
      updateURLParameter(window.location.href, "img", e.target.value)
    );
  };

  return (
    <div className="puzzle">
      <h1>PUZZLE</h1>
      <Board imgUrl={imgUrl} />
      <input value={imgUrl} onChange={handleImageChange} />
    </div>
  );
}

export default Puzzle;
