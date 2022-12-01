import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'
import img from "img/profile.jpg"

const Auth = () => {

    const user = {
        name: "Atıf Şimşek",
        avatar: img
    }

    return (
        <Menu as="nav" className={"relative"}>
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? "bg-active" : "bg-black"} hover:bg-active`}>
                        <img className='w-8 h-8 rounded-full p-0.5 mr-2 ' src={user.avatar} alt="" />
                        <span className='text-sm font-semibold mr-2'>{user.name}</span>
                        <span className={open && "rotate-180"}>
                            <Icon size={16} name="down" />
                        </span>
                    </Menu.Button>
                    <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2"}>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`${active && 'bg-blue-500'}`}
                                    href="/account-settings"
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}

export default Auth