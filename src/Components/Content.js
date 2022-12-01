import Navbar from "Components/Navbar";
import routes from "routes"
import { useRoutes } from "react-router-dom";

const Content = () => {
  return (
    <main className="flex-auto">
      <Navbar />
      {useRoutes(routes)}
    </main>
  )
}

export default Content