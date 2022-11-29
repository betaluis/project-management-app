import { useCollection } from '../hooks'
import { Avatar } from '../components'

export const OnlineUsers = () => {
    const { error, docs } = useCollection("users")

    return (
        <div className="w-64 min-w-64 p-8 bg-gray-200 text-heading">
            <h2 className="text-center mb-10 border-b border-b-[#eee] text-base">All Users</h2>
            {error ? <div className="text-red-200">{error}</div> : null}
            {docs ? docs.map(user => (
                <div key={user.id} className="flex justify-end items-center my-5 mx-auto">
                    <span>{user.displayName}</span>
                    <Avatar src={user.photoURL} />
                </div>
            )) : null}
        </div>
    )
}
