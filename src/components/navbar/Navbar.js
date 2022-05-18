// Router
import { Link } from 'react-router-dom';

// Logo
import Logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <div className='w-full py-8 px-0 mb-20'>
            <ul className='flex my-0 mx-auto items-center justify-end gap-6'>
                <li className='mr-auto'>
                    <Link to="/" className='inline-block w-14'>
                        <img src={Logo} />
                    </Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <button className='btn'>Logout</button>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;