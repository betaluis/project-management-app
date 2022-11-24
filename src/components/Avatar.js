import { useAuthContext } from '../hooks/'

export const Avatar = () => {

    const { user } = useAuthContext()
    const { photoURL: src } = user

    return (
        <>
            {user ?
                <div className="inline-block w-12 h-12 rounded-full overflow-hidden">
                    {src ? <img className="w-full h-full" src={src} alt="User avatar" />
                        : <span>{user.displayName.slice(0, 1).toUpperCase() + user.displayName.slice(1)}</span>
                    }
                </div> : null
            }
        </>
    )
}
