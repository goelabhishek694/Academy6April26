function Banner({movies}) {

  return (
    <div className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end " style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movies[0]?.backdrop_path})`}}>
    <div className='text-white text-2xl w-full text-center'>{movies[0]?.title}</div>
    </div>
  )
}

export default Banner
