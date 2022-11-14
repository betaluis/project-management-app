import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loading, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }

  return (
    <div className="flex items-center justify-center h-full">
      <form className="space-y-8 flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />
        </label>
        <label className="flex flex-col">
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
