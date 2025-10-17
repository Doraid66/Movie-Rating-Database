import { useState } from 'react'
import axios from 'axios';
import Search from './component/Search'
import Results from './component/Results'
import Popup from './component/Popup'
import WatchedMovies from './component/WatchedMovies';
import Galaxy from './component/Galaxy';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  
  const [watched, setWatched] = useState([]);
  const [showWatched, setShowWatched] = useState(false);


  const apiurl = "http://www.omdbapi.com/?apikey=eaed2fa3";
  
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results }
        });
      });
    }
  }
  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s }
    }

    );
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  const addToWatched = movie => {
    setWatched(prevWatched => [...prevWatched, movie]);
    
  }

  return (
    <>

      <Galaxy
        mouseRepulsion={false}
        mouseInteraction={false}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
        speed={1.5}
      />
    <div className="App">


    <div className="menu">
      <div className="logo">Movie Library</div>
      <div className="menu-items">
        <a onClick={()=> setShowWatched(prevStat =>{return false})}>Home</a>
        <a onClick={()=> setShowWatched(prevStat =>{return true;})}>watched movies</a>
      </div>
    </div>
    


    {!showWatched ?     <main>
          <header>
      <h1>Movie Library</h1>
    </header>
    <Search handleInput={handleInput} search={search}/>    
    <Results results={state.results} openPopup={openPopup}/>
    
    {(typeof state.selected.Title != "undefined") ? <Popup addToWatched={addToWatched} selected={state.selected} closePopup={closePopup}/> : false}
    </main> : false}

   
    {showWatched ? <main>
           <header>
      <h1>My Library </h1>
    </header>
       <WatchedMovies results={watched}/> 
       </main>: false}

      </div>
    </>
  )
}

export default App
