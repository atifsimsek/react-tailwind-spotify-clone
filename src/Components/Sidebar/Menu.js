import { Icon } from "Icons"
import { NavLink } from "react-router-dom"


const Menu = () => {

    return (
        <nav className='px-2 '>
            <ul className='flex flex-col'>
                <li>
                    <NavLink to="/react-tailwind-spotify-clone" className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded' end>
                        <span>

                            <Icon name="home" />

                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/react-tailwind-spotify-clone/search" className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded ' end>
                        <span>
                            <Icon name="search" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/react-tailwind-spotify-clone/collection" className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded ' end>
                        <span>
                            <Icon name="collection" />
                        </span>
                        Kitaplığım
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu