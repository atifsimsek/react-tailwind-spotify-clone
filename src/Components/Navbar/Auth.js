import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'
import img from "img/profile.jpg"

const Auth = () => {

    const user = {
        name: "Atıf Şimşek",
        avatar: img
    }

    return (
        <Menu as="nav" className={"relative z-50"}>
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? "bg-active" : "bg-black"} hover:bg-active`}>
                        <img className='w-8 h-8 rounded-full p-0.5 mr-2 ' src={user.avatar} alt="" />
                        <span className='text-sm font-semibold mr-2'>{user.name}</span>
                        <span className={open && "rotate-180"}>
                            <Icon size={16} name="down" />
                        </span>
                    </Menu.Button>
                    <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={` h-10 flex items-center justify-between px-2 text-sm rounded  ${active && 'bg-white bg-opacity-20'}`}
                                    href="/account-settings"
                                >
                                    Account
                                    <Icon name="external" size={16}/>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={` h-10 flex items-center px-2 text-sm rounded  ${active && 'bg-white bg-opacity-20'}`}
                                    href="/account-settings"
                                >
                                    Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={` h-10 flex items-center px-2 text-sm rounded  ${active && 'bg-white bg-opacity-20'}`}
                                    href="/account-settings"
                                >
                                    Log Out
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