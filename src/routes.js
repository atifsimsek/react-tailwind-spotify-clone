import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";
const routes = [
  {
    name: "home",
    path: "/react-tailwind-spotify-clone/",
    element: <Home />,
  },

  {
    name: "search",
    path: "/react-tailwind-spotify-clone/search",
    element: <Search />,
  },
  {
    name: "search",
    path: "/react-tailwind-spotify-clone/collection",
    element: <Collection />,
  },
];

export default routes;
