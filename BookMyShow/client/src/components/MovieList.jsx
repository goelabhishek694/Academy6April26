import { useEffect, useState } from "react";
import { Image, message, Table, Button, Tooltip, Popconfirm } from "antd";
import { deleteMovie, getAllMovies } from "../api/movie";
import MovieForm from "./MovieForm";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function MovieList() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await getAllMovies();
      if (response.success) {
        setMovies(response.data);
      } else {
        message.error(response.message);
      }
    } catch (err) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete = async (movie) => {
    try{
      setLoading(true);
      const response = await deleteMovie(movie._id);
      if(response.success){
        message.success(response.message);
        fetchMovies();
      }else{
        message.error(response.message);
      }
    }catch(err){
      message.error(err.message);
    }finally{
      setLoading(false);
    }
  }

  const columns = [
    {
      title: "Poster",
      dataIndex: "poster",
      key: "poster",
      render: (poster) => <Image src={poster} alt="Poster" width={70} />,
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
    {
      title: "Actions",
      render: (_, record) => (
        <div>
          <Tooltip title="Edit">
            <Button icon={<EditOutlined />} onClick={() => {
              setSelectedMovie(record);
              setOpen(true);
            }} />
          </Tooltip>
  
          <Popconfirm
            title="Delete this movie ?"
            okText="Delete"
            okButtonProps={{ danger: true }}
            cancelText="Cancel"
            onConfirm={() => handleDelete(record)}
          >
            <Tooltip title="Delete">
              <Button icon={<DeleteOutlined />} onClick={() => {}} />
            </Tooltip>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <Button
          type="primary"
          onClick={() => {
            setOpen(true);
            setSelectedMovie(null);
          }}
        >
          Add Movie
        </Button>
      </div>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={movies}
        loading={loading}
      />

      <MovieForm open={open} setOpen={setOpen} onSuccess={fetchMovies} selectedMovie={selectedMovie} />
    </div>
  );
}

export default MovieList;
