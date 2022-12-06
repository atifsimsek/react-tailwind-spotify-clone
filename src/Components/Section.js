import { NavLink } from "react-router-dom"
import { Icon } from "Icons"


const Section = ({ title, more = false, items }) => {

    const imageStyle = item => {
        switch (item.type) {
            case "artist":
                return "rounded-full"

            case "podcast":
                return "rounded-lg"


            default:
                return "rounded"

        }

    }


    return (
        <section>
            <header className=" flex items-center justify-between mb-4">
                <h3 className="text-2xl text-white font-semibold tracking-tight">{title}</h3>
                {more &&
                    <NavLink className="text-xs font-semibold uppercase text-link hover:underline" to={more}>
                        See All
                    </NavLink>
                }
            </header>
            <div className="grid grid-cols-5">
                {
                    items.map(item => (
                        <NavLink
                            to="/"
                            key={item.id}
                            className="!bg-footer p-4 rounded gap-x-6 hover:!bg-active"
                        >
                            <div className="pt-[100%] relative mb-4 group ">
                                <img src={item.image} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)} `} alt="" />
                                <button className="w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 hidden items-center justify-center group-hover:flex group-focus:flex ">
                                    <Icon name="play" size={16} />
                                </button>
                            </div>
                            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold  ">
                                {item.title}
                            </h6>
                            <p className="line-clamp-2 text-link text-sm mt-1">
                                {item.description}
                            </p>
                        </NavLink>
                    ))
                }

            </div>
        </section>
    )
}

export default Section