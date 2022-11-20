import { useState } from "react"
import { useLogin } from "../../hooks"

export const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, loading, error } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
    }

    return (
        <div className="flex flex-col items-center justify-center mt-32 w-[440px] mx-auto bg-white p-8 rounded-lg drop-shadow-lg">
            <h2 className="text-slate-700 font-bold text-3xl mb-6">Sign In</h2>
            <form className="space-y-8 flex flex-col items-center w-72" onSubmit={handleSubmit}>
                <label className="flex flex-col w-full">
                    <span>Email:</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        required
                    />
                </label>
                <label className="flex flex-col w-full">
                    <span>Password:</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        required
                    />
                </label>
                {
                    loading ? <button disabled className="bg-slate-200 py-2 px-10 rounded-full hover:bg-slate-800 hover:text-white transition-colors">Loading...</button>
                        : <button className="bg-slate-200 py-2 px-10 rounded-full hover:bg-slate-800 hover:text-white transition-colors">Sign In</button>
                }
                {error ? <div>{error}</div> : null}
            </form>
        </div>
    )
}
