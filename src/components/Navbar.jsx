import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks"
import { useSignout } from '../hooks'

export const Navbar = () => {

  const { user } = useAuthContext()
  const { signout } = useSignout()

  return (
    <div className="border-b-2 w-full p-8">
      <div className="flex justify-between items-center">

        <div className='flex items-center'>
          <h1 className="-mt-1 text-2xl font-bold mr-3">Logo</h1>
          {user ?
            <div className="text-sm text-slate-500">
              Hello, {user ? user.displayName.slice(0, 1).toUpperCase() + user.displayName.slice(1) : null}!
            </div>
            : null
          }
        </div>

        <div className="flex space-x-8 items-center">
          {user ? (
            <>
              <Link to={'/'}>Dashboard</Link>
              <button onClick={signout} className="bg-slate-800 text-white py-2 px-8 rounded-full">Sign Out</button>
            </>
          ) : (
            <>
              <Link to={'/login'}>Sign In</Link>
              <Link to={'/signup'}>Sign Up</Link>
            </>
          )}
        </div>

      </div>
    </div>
  )

}
