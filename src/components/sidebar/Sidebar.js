// Router
import { NavLink } from 'react-router-dom';

// Icons
import { ReactComponent as DashboardIcon } from '../../assets/dashboard.svg'
import { ReactComponent as AddIcon } from '../../assets/add.svg'


const Sidebar = () => {
    return (
        <div className='w-[300px] m-w-[300px] bg-primary relative text-white'>
            <div className='font-bold text-center tracking-[1px] py-10 px-8 border-b-2 border-blue-800'>
                <div>
                    {/* Users go here later. */}
                    <p>Hey User!</p>
                </div>
                <nav className='mt-20 ml-5'>
                    <ul>
                        <li className='mt-3'>
                            <NavLink exact to="/" className="flex p-3 w-full text-white">
                                <div className='text-white w-full'>
                                    <DashboardIcon className="h-10" />
                                </div>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/create">
                                <div className='text-white'>
                                    <AddIcon />
                                </div>
                                <span>New Project</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}


export default Sidebar;