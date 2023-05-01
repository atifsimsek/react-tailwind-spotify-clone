import { Icon } from "Icons";
import { useNavigate } from "react-router-dom";
import { useMatch } from "react-router-dom";
import Search from "./Search";

const Navigation = () => {
  const navigate = useNavigate("");

  const searchRoute = useMatch("/search");

  return (
    <>
      <div>
        <nav className="flex gap-x-4">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="w-8 h-8 bg-black bg-opacity-70  flex items-center justify-center rounded-full"
          >
            <Icon name="prev" size={22} />
          </button>
          <button
            onClick={() => {
              navigate(+1);
            }}
            className="w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full"
          >
            <Icon name="next" size={22} />
          </button>
        </nav>
      </div>

      {searchRoute && <Search />}
    </>
  );
};

export default Navigation;
