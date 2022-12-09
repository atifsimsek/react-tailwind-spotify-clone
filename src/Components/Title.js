import { NavLink } from 'react-router-dom'

const Title = ({ title, more }) => {
    return (

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

    )
}

export default Title