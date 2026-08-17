import { useEffect, useState } from "react";
import { Image, message, Table, Button } from "antd";
import { getAllMovies } from "../api/movie";
import MovieForm from "./MovieForm";

const columns = [
  {
    title: "Poster",
    dataIndex: "poster",
    key: "poster",
    render: (poster) => (
      <Image src={poster} alt="Poster" width={70} />
    ),
  },
  {
    title: "Movie Name",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    ellipsis: true,
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
    render: (duration) => `${duration} mins`,
  },
  {
    title: "Genre",
    dataIndex: "genre",
    key: "genre",
  },
  {
    title: "Language",
    dataIndex: "language",
    key: "language",
  },
];

function MovieList() {

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);

  const handleAddMovie = () => {
    
  }

  const fetchMovies = async() => {
    try{
      setLoading(true);
      const response = await getAllMovies();
      if(response.success){
        setMovies(response.data);
      }else{
        message.error(response.message);
      }
    }catch(err){
      message.error(err.message);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <Button type="primary" onClick={() => setOpen(true)}>Add Movie</Button>
      </div>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={movies}
        loading={loading}
      />

      <MovieForm open={open} setOpen={setOpen} onSuccess={fetchMovies}/>
    </div>
  );
}

export default MovieList;
