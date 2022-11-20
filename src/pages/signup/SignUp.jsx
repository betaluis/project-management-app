import { useState } from "react"
import { useSignup } from '../../hooks'

export const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState(null)

    const { signup, error, loading } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, name, thumbnail)

        setName('')
        setEmail('')
        setPassword('')
    }

    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        console.log(selected)

        if (!selected) {
            setThumbnailError('Please select a file')
            return
        }
        if (!selected.type.includes('image')) {
            setThumbnailError('Selected file must be an image')
            return
        }
        if (selected.size > 100000) {
            setThumbnailError('Image file size must be less than 100kb')
            return
        }

        setThumbnailError(null)
        setThumbnail(selected)

        console.log('thumbnail updated')

    }

    return (
        <div className="flex flex-col items-center justify-center mt-20 w-[440px] mx-auto bg-white p-8 rounded-lg drop-shadow-lg">
            <h2 className="text-slate-700 font-bold text-3xl mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-8 justify-center items-center w-72">
                <label className="flex flex-col w-full">
                    <span>Name:</span>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.currentTarget.value)}
                        required
                    />
                </label>
                <label className="flex flex-col w-full">
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                        required
                    />
                </label>
                <label className="flex flex-col w-full">
                    <span>Password:</span>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                        required
                    />
                </label>
                <label className="flex flex-col w-full">
                    <span>Profile Picture:</span>
                    <input
                        type="file"
                        name="file"
                        // value={thumbnail}
                        onChange={handleFileChange}
                        required
                    />
                    {thumbnailError ? <div className="error">{thumbnailError}</div> : null}
                </label>
                {loading ? <button disabled className="bg-slate-200 py-2 px-10 rounded-full hover:bg-slate-800 hover:text-white transition-colors">Loading...</button> : <button className="bg-slate-200 py-2 px-10 rounded-full hover:bg-slate-800 hover:text-white transition-colors">Sign Up</button>}
                {error ? <div className="error">{error}</div> : null}
            </form>
        </div>
    )
}
