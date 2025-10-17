import React from "react";

function Popup({selected, closePopup, addToWatched}) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>{selected.Year}</span></h2>
                <p className="rating"> Rating: {selected.imdbRating} </p>
                <div className="plot">
                    <img src={selected.Poster}  />
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
                <button className="close" onClick={()=>{ addToWatched(selected); closePopup()}}>Watched</button>
            </div>
        </section>
    )
}   
export default Popup;