import { useState } from 'react'
import axios from 'axios';
import Search from './component/Search'
import Results from './component/Results'
import Popup from './component/Popup'
import Iridescence from './component/Iridescence';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  
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

  return (
    <>


    <div className="App">


    <div className="menu">
      <div className="logo">Movie Library</div>
      <div className="menu-items">
        <a href="/">Home</a>
        <a href="/">watched movies</a>
        <a href="/">rate</a>
      </div>
    </div>
    
    <header>
      <h1>Movie Library</h1>
    </header>

    <main>
    <Search handleInput={handleInput} search={search}/>    
    <Results results={state.results} openPopup={openPopup}/>
    
    {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup}/> : false}
    </main>
      </div>
    </>
  )
}

export default App
