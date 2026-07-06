import React, { useEffect, useState } from "react";

function Movies({ movies }) {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    let moviesFromLS = localStorage.getItem('watchlist');
    if(!moviesFromLS) return;
    setWatchlist(JSON.parse(moviesFromLS));
  }, [])

  const addToWatchlist = (movieObj) => {
    let updatedWatchlist = [...watchlist, movieObj];  
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  const removeFromWatchlist = (movieObjId) => {
    const updatedWatchList = watchlist.filter((movie) => movie.id != movieObjId);
    setWatchlist(updatedWatchList);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchList));
  };

  const doesContain = (movieObjId) => {
    console.log(watchlist);
    
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObjId) {
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      <div className="text-6xl font-bold text-center m-4">Movies</div>
      <div className="flex justify-evenly gap-8 flex-wrap">
        {movies.map((movieObj) => (
          <div
            className="h-[40vh] w-[200px] bg-cover bg-center rounded-lg hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-end "
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieObj.poster_path})`,
            }}
          >
            <div className="text-white w-full text-center p-2 bg-gray-900/40 rounded-lg">
              {movieObj.title}
            </div>
            {doesContain(movieObj.id) == false ? (
              <div
                className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
                onClick={() => addToWatchlist(movieObj)}
              >
                😍
              </div>
            ) : (
              <div
                className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
                onClick={() => removeFromWatchlist(movieObj.id)}
              >
                ❌
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
