import React from "react";
import Radio from "./Radio";

function Result({result, openPopup, canRate}) {

  return (
    <div className={canRate? "rateResult": "result"} onClick={() =>{ openPopup(result.imdbID)}}>
        <img src={result.Poster} />
        <h3>{result.Title}</h3>
        {canRate ? <Radio name={`rate-${result.imdbID}`}/> : false}
    </div>
  )
}   
export default Result;