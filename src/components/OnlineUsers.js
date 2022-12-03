import { useCollection } from '../hooks'
import { Avatar } from '../components'

export const OnlineUsers = () => {
    const { error, docs } = useCollection("users")

    return (
        <div className="w-64 min-w-64 p-8 bg-gray-200 text-heading divide-y divide-gray-200">
            <h2 className="text-right mb-10 pb-2 border-b border-b-gray-300 text-xl font-bold">All Users</h2>
            {error ? <div className="text-red-200">{error}</div> : null}
            {docs ? docs.map(user => (
                <div key={user.id} className="flex justify-end items-center my-5 mx-auto">
                    <span className="mr-4 text-lg">{user ? user.displayName.slice(0, 1).toUpperCase() + user.displayName.slice(1) : null}</span>
                    <div className="w-10 h-10 relative">
                        <Avatar src={user.photoURL} />
                        {user.online ?
                            <div className="h-2 w-2 bg-green-500 rounded-full outline outline-gray-200 absolute bottom-0 right-0"></div>
                            : null}
                    </div>
                </div>
            )) : null}
        </div>
    )
}
