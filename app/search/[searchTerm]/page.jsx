import Results from "../../components/Results"

const SeachPage = async  ({params}) => {
  const searchTerm = params.searchTerm
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`)

  if(!res.ok){
    throw new Error(`Error Fetching Data`)
  }

  const {results} = await res.json()
  
  return (
    <div>
      {results && results.length ? <Results results={results}/> : <h1 className="text-center pt-6">No Result Found</h1>}
    </div>
  )
}

export default SeachPage
