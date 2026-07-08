import React, { useState, useEffect } from "react";
import genreIds from "../utility/genre";

function WatchList() {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres", "Thriller", "Action"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  useEffect(() => {
    let watchlist = localStorage.getItem("watchlist");
    if (!watchlist) return;
    setWatchlist(JSON.parse(watchlist));
  }, []);

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });

    console.log(temp);

    setGenreList(["All Genres", ...new Set(temp)]);
  }, [watchlist])

  const handleAscendingRating = () => {
    let sortedAscending = watchlist.sort((objA, objB) => {
      console.log(objA.vote_average - objB.vote_average);

      return objA.vote_average - objB.vote_average;
    });
    setWatchlist([...sortedAscending]);
  };

  const handleDescendingRating = () => {
    let sortedDescending = watchlist.sort(
      (objA, objB) => objB.vote_average - objA.vote_average,
    );
    setWatchlist([...sortedDescending]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
    <div className="flex justify-center">
      {genreList.map((genre) => {
        return(
          <div className={currGenre == genre ? 'mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl' : 'mx-4 flex justify-center items-center bg-gray-400/50 h-[3rem] w-[9rem] text-white font-bold border rounded-xl'} onClick={() => setCurrGenre(genre)}>{genre}</div>
        )
      })}
    </div>
      <div className="flex justify-center my-10">
        <input
          type="text"
          placeholder="Search Movies"
          onChange = {handleSearch}
          value={search}
          className="bg-gray-200 h-[3rem] w-[18rem] px-4 outline-none border border-slate-600"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadwo-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div>
                  <i
                    onClick={handleAscendingRating}
                    class="fa-solid fa-angle-up"
                  ></i>
                  Ratings
                  <i
                    onClick={handleDescendingRating}
                    class="fa-solid fa-angle-down"
                  ></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Delete Movies</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {watchlist.filter((movieObj) => {
              if(currGenre == "All Genres") return true;
              return genreIds[movieObj.genre_ids[0]] == currGenre
            })
            
            .filter((movieObj) => movieObj.title.toLowerCase().includes(search.toLowerCase()))

            // display movie
            .map((movieObj) => {
              return (
                <tr className="hover:bg-gray-50">
                  <td className="flex items-center gap-4 px-6 py-4 font-normal text-gray-900">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      alt="movie poster"
                      className="h-[6rem] w-[10rem] object-fit"
                    />
                    <div className="font-medium text-gray-700 text-sm">
                      {movieObj.title}
                    </div>
                  </td>
                  <td className="pl-6 py-4">{movieObj.vote_average}</td>
                  <td className="pl-3 py-4">{movieObj.popularity}</td>
                  <td className="pl-2 py-4">
                    {genreIds[movieObj.genre_ids[0]]}
                  </td>
                  <td className="pl-6 py-4">
                    <button className="text-red-500">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
