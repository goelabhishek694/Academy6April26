import React, {useState, useEffect} from 'react'
import Banner from '../Components/Banner'
import Movies from '../Components/Movies'
import { useDispatch, useSelector } from 'react-redux'
import { handleNext, handlePrev } from '../redux/paginationSlice';
import { fetchMoviesMiddleware } from '../middleware/movieMiddleware';

function Home() {
  const dispatch = useDispatch();
  const {pageNo} = useSelector((store) => store.pagination);
  const {movies} = useSelector((store) => store.movie);
  
  const handlePrevPage = () => {
    dispatch(handlePrev())
  };

  const handleNextPage = () => {
    dispatch(handleNext())
  };

  useEffect(() => {
    dispatch(fetchMoviesMiddleware(pageNo));
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
