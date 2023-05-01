import logo from "img/logo.svg";
import Menu from "./Sidebar/Menu";
import PlayList from "./Sidebar/PlayList";
import { Icon } from "Icons";
import DowlandApp from "./Sidebar/DowlandApp";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { sidebar } = useSelector((state) => state.player);

  return (
    <aside className="w-60 pt-6 flex flex-col flex-shrink-0  bg-black">
      <NavLink
        to="/react-tailwind-spotify-clone/"
        className="mb-7 px-6 !bg-black"
        href="/"
      >
        <img className="h-10" src={logo} alt="" />
      </NavLink>

      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <a
              className="py-2 px-6 group flex items-center text-sm text-link font font-semibold hover:text-white "
              href="/"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white group-hover:bg-opacity-100 bg-opacity-60  rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              className="py-2 px-6 group flex items-center text-sm text-link  font font-semibold hover:text-white"
              href="/"
            >
              <span className="w-6 h-6 flex items-center justify-center group-hover:bg-opacity-100 mr-4 bg-gradient-to-br from-purple-700 to-blue-300 text-white rounded-sm opacity-70 group-hover:opacity-100">
                <Icon name="heartFilled" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <PlayList />

      <DowlandApp />

      {sidebar && <SidebarCover />}
    </aside>
  );
};

export default Sidebar;
