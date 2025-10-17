
import Result from "./Result";


function WatchedMovies({results}) {
  return (
    <section className="results">
        {results.map(result =>(
            <Result key={result.imdbID} result={result} canRate={true}/>
        ))}
    </section>
  )
}   
export default WatchedMovies;