import { Tabs } from "antd";
import MovieList from "../components/MovieList";
import TheatresTable from "../components/TheatresTable";

const tabItems = [
  {
    key: "movies",
    label: "Movies",
    children: <MovieList/>,
  },
  {
    key: "theaters",
    label: "Theaters",
    children: <TheatresTable/>,
  }
];

function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <Tabs defaultActiveKey="movies" items={tabItems} />
    </div>
  );
}

export default Admin;
