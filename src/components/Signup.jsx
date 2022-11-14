import { useState } from "react"
import { useSignup } from '../hooks'

export const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signup, error, loading } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name)

    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex items-center justify-center h-full">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-8 justify-center items-center">
        <label className="flex flex-col">
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          <span>Password:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            required
          />
        </label>
        {loading ? <button disabled className="bg-slate-200 py-2 px-10 rounded-full hover:bg-slate-800 hover:text-white transition-colors">Loading...</button> : <button className="bg-slate-200 py-2 px-10 rounded-full hover:bg-slate-800 hover:text-white transition-colors">Sign Up</button>}
        {error ? <div>{error}</div> : null}
      </form>
    </div>
  )
}
