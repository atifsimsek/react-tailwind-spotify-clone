import Navbar from "Components/Navbar";
import routes from "routes"
import { useRoutes } from "react-router-dom";

const Content = () => {
  return (
    <main className="flex-auto">
      <Navbar />
      <div className="px-8 pt-5">
        {useRoutes(routes)}
      </div>
    </main>
  )
}

export default Content