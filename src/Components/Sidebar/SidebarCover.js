import { useSelector, useDispatch } from "react-redux"
import { Icon } from "Icons"
import { setSidebar } from "stores.js/player"


const SidebarCover = () => {
    const dispatch = useDispatch()

    const { current } = useSelector(state => state.player)


    return (
        <div className="pt-[100%] relative bg-black group">
            <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0" alt="" />
            <button
                onClick={() => { dispatch(setSidebar(false)) }}
                className="w-6 h-6 bg-black opacity-0 hover:!opacity-100 rotate-180 hover:scale-[1.06] group-hover:opacity-60 rounded-full top-1 right-1 absolute flex items-center justify-center">
                <Icon name="up" size={16} />
            </button>
        </div>
    )
}

export default SidebarCover