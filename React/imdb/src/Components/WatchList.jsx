import React, {useState,useEffect} from 'react'
import genreIds from '../utility/genre';

function WatchList() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    let watchlist = localStorage.getItem('watchlist');
    if(!watchlist) return;
    setWatchlist(JSON.parse(watchlist));
  }, []);

  return (
    <div className='overflow-hidden rounded-lg border border-gray-200 shadwo-md m-5'>
      <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
        <thead>
          <tr className='bg-gray-100'>
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
            <div>
              <i class="fa-solid fa-angle-up"></i>
              Ratings
              <i class="fa-solid fa-angle-down"></i>
              </div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
            <th>Delete Movies</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
          {
            watchlist.map(movieObj => {
              return (
                <tr className='hover:bg-gray-50'>
                <td className='flex items-center gap-4 px-6 py-4 font-normal text-gray-900'>
                  <img src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} alt='movie poster' className='h-[6rem] w-[10rem] object-fit'/>
                  <div className='font-medium text-gray-700 text-sm'>{movieObj.title}</div>
                </td>
                <td className='pl-6 py-4'>{movieObj.vote_average}</td>
                <td className='pl-3 py-4'>{movieObj.popularity}</td>
                <td className='pl-2 py-4'>{genreIds[movieObj.genre_ids[0]]}</td>
                <td className='pl-6 py-4'>
                  <button className='text-red-500'>
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default WatchList
