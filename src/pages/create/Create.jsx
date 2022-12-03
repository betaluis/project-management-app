import { useState } from "react"

export const Create = () => {

    const [name, setName] = useState("")
    const [details, setDetails] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [category, setCategory] = useState("")
    const [assignedUsers, setAssignedUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ name, details, dueDate })
    }

    return (
        <div>
            <h2 className="text-slate-800 text-xl mb-8 font-bold">
                Create a new project
            </h2>
            <form onSubmit={handleSubmit} className="max-w-lg space-y-8">
                <label>
                    <span>Project name:</span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span>Project details:</span>
                    <textarea
                        type="text"
                        required
                        onChange={(e) => setDetails(e.target.value)}
                        value={details}
                        className="rounded-md"
                    ></textarea>
                </label>
                <label>
                    <span>Project details:</span>
                    <input
                        type="date"
                        required
                        onChange={(e) => setDueDate(e.target.value)}
                        value={dueDate}
                    />
                </label>
                <label>
                    <span>Project category:</span>
                </label>
                <label>
                    <span>Assign to:</span>
                </label>
                <button className="button">Add Project</button>
            </form>
        </div>
    )
}
