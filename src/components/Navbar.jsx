import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks"
import { useSignout } from '../hooks'
import { Logo } from "./"

export const Navbar = () => {

    const { user } = useAuthContext()
    const { signout } = useSignout()

    return (
        <nav className="w-full py-8 mb-20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

                <div className='flex items-center'>
                    <Logo />
                    <span className="text-2xl font-bold text-slate-800 inline ml-2">Alien Manage</span>
                </div>

                <div className="flex space-x-8 items-center">
                    {user ? (
                        <button onClick={signout} className="button">Sign Out</button>
                    ) : (
                        <>
                            <Link to={'/login'}>Sign In</Link>
                            <Link className="button" to={'/signup'}>Sign Up</Link>
                        </>
                    )}
                </div>

            </div>
        </nav>
    )

}
