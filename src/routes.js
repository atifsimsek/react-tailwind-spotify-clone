import Home from "views/Home"
import Search from "views/Search"
import Collection from "views/Collection";
const routes = [

    {
        name: "home",
        path: "/",
        element: <Home />,
    },

    {
        name: "search",
        path: "/search",
        element: <Search />,
    },
    {
        name: "search",
        path: "/collection",
        element: <Collection />,
    },

]


export default routes;