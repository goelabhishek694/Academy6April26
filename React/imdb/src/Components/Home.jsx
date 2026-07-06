import React, {useState, useEffect} from 'react'
import Banner from './Banner'
import Movies from './Movies'

function Home() {
  const [movies, setMovies] = useState([]);
  let initialPageNo = localStorage.getItem('pageNo') || 1;
  const [pageNo, setPageNo] = useState(parseInt(initialPageNo));

  const handlePrevPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
      localStorage.setItem('pageNo', pageNo - 1);
    }
  };

  const handleNextPage = () => {
    setPageNo(pageNo + 1);
    localStorage.setItem('pageNo', pageNo + 1);
  };

  const fetchMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ5ZWU4NjkyN2M4NjJlNmFjNDAzNjBlM2ViOGMwZCIsIm5iZiI6MTY1NzgxODcwMy4yMDIsInN1YiI6IjYyZDA0ZTRmMzk0YTg3MDRhZTVjNWEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._LNDpBJ--YTga2vupX46hCWhBnsgEW43JjSJ2hyTA6k'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNo}`, options)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setMovies(res.results);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchMovies();
  },[pageNo]);

  return (
    <div>
      <Banner movies={movies}/>
      <Movies movies={movies}/>

      {/* lifitng the state up -> HW */}
      <div className="bg-gray-400 h-[50px] p-4 mt-8 w-full flex justify-center items-center gap-2 text-xl">
        <div onClick={handlePrevPage} className="px-8">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div>{pageNo}</div>
        <div onClick={handleNextPage} className=" px-8 ">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}

export default Home
