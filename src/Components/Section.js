import { NavLink } from "react-router-dom"
import SongItem from "./SongItem"


const Section = ({ title, more = false, items }) => {



    return (
        <section>
            <header className=" flex items-center justify-between mb-4">

                <NavLink to={"/"}>
                    <h3 className=" text-2xl bg-backdrop text-white font-semibold tracking-tight hover:underline">{title}</h3>
                </NavLink>

                {more &&
                    <NavLink className="text-xs font-semibold uppercase text-link hover:underline tracking-wider" to={more}>
                        See All
                    </NavLink>
                }
            </header>
            <div className="grid grid-cols-5">
                {
                    items.map(item => (
                        <SongItem key={item.id} item={item} />
                    ))
                }

            </div>
        </section>
    )
}

export default Section