import { NavLink } from "react-router-dom"
import SongItem from "./SongItem"
import Title from "./Title"


const Section = ({ title, more = false, items }) => {



    return (
        <section>
            <Title title={title} more={more} />
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