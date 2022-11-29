import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks'
import { DashboardIcon, AddIcon, Avatar } from './'

const links = [
    {
        path: '/',
        icon: <DashboardIcon />,
        text: 'Dashboard'
    },
    {
        path: '/create',
        icon: <AddIcon />,
        text: 'New Project'
    }
]

const Sidebar = () => {

    const { user } = useAuthContext()
    const { photoURL } = user

    return (
        <div className="w-72 min-w-72 min-h-screen bg-primary relative text-white">
            <div className=''>

                <div className="font-bold text-center tracking-wider py-10 px-7 border-b-[2px] border-b-white/20">
                    <Avatar src={photoURL} />
                    {user ? <p>Hey, {user.displayName.slice(0, 1).toUpperCase() + user.displayName.slice(1)}!</p> : null}
                </div>

                <nav className="mt-20 ml-5">
                    <ul>
                        {links.map((link, index) => (
                            <li key={index} className="mt-3">
                                <NavLink to={link.path} className='sidebarLink flex items-center p-3 w-full text-white'>
                                    <div className="mr-3 icon text-lg">
                                        {link.icon}
                                    </div>
                                    <span>{link.text}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>


            </div>
        </div >
    )
}

export default Sidebar
