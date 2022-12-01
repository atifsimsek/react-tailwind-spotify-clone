import { Icon } from "Icons"
import { useNavigate } from "react-router-dom";

const Navigation = () => {

    const navigate = useNavigate("")


    return (
        <div>
            <nav className="flex gap-x-4">
                <button onClick={() => { navigate(-1) }} className="w-8 h-8 bg-black bg-opacity-70  flex items-center justify-center rounded-full">
                    <Icon name="prev" size={22} />
                </button>
                <button onClick={() => { navigate(+1) }} className="w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full">
                    <Icon name="next" size={22} />
                </button>
            </nav>
        </div>
    )
}

export default Navigation