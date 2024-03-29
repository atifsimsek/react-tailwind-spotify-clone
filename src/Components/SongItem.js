import { NavLink } from "react-router-dom";
import { Icon } from "Icons";
import { useSelector, useDispatch } from "react-redux";
import { setCurrent } from "stores.js/player";

const SongItem = ({ item }) => {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

  console.log(controls);

  const isCurrentItem = current?.id === item.id && playing;

  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";

      case "podcast":
        return "rounded-xl";

      default:
        return "rounded";
    }
  };

  const updateCurrent = () => {
    dispatch(setCurrent(item));
    if (playing) {
      controls.pause();
    } else {
      controls.play();
    }
  };

  return (
    <NavLink
      to="/"
      key={item.id}
      className="!bg-footer p-4 rounded gap-x-6 hover:!bg-active"
    >
      <div className="pt-[100%] relative mb-4 group ">
        <img
          src={item.image}
          className={`absolute inset-0 object-cover w-full h-full ${imageStyle(
            item
          )} `}
          alt=""
        />
        <button
          onClick={updateCurrent}
          className={`w-10 h-10  rounded-full bg-primary absolute bottom-2 right-2 hidden items-center justify-center group-hover:flex group-focus:flex ${
            !isCurrentItem ? "hidden" : "!flex"
          } `}
        >
          <Icon name={isCurrentItem ? "pause" : "play"} size={16} />
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold  ">
        {item.title}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-1">{item.description}</p>
    </NavLink>
  );
};

export default SongItem;
