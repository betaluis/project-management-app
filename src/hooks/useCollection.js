import { useRef, useState, useEffect } from "react"
import { db } from "../firebase/config"
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore"

export const useCollection = (c, _query, _orderBy) => {

    const [docs, setDocs] = useState(null)
    const [error, setError] = useState(null)
    const q = useRef(_query).current
    const o = useRef(_orderBy).current

    useEffect(() => {
        let ref = collection(db, c)

        if (q) {
            ref = query(ref, where(...query))
        }

        if (o) {
            ref = query(ref, orderBy(...orderBy))
        }

        const unsub = onSnapshot(ref, (snap) => {
            let result = []
            snap.forEach(doc => result.push({ id: doc.id, ...doc.data() }))
            setDocs(result)
            setError(null)
        }, error => {
            console.log(error)
            setError("Could not fetch data")
        })

        return () => unsub()

    }, [c, q, o])

    return { docs, error }
}
