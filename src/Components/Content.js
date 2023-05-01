import Navbar from "Components/Navbar";
import routes from "routes";
import { useRoutes } from "react-router-dom";

const Content = () => {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">{useRoutes(routes)}</div>
    </main>
  );
};

export default Content;
