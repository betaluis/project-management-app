
import { useState, useEffect } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

const initialState = {
    document: null,
    isPending: null,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case "ADD_DOC":
            return {
                document: action.payload,
                isPending: false,
                error: null,
                success: true
            }
        case "DEL_DOC":
            return {
                document: null,
                isPending: false,
                error: null,
                success: true
            }
        case "IS_PENDING":
            return {
                document: null,
                isPending: true,
                error: null,
                success: null
            }
        case "ERROR":
            return {
                document: null,
                isPending: false,
                error: true,
                success: false
            }
        default:
            return state
    }
}

export const useFirestore = (collection) => {

    const [isCanceled, setIsCanceled] = useState(false);
    const [response, dispatch] = useReducer(firestoreReducer, initialState)

    const dispatchIfNotCanceled = (action) => {
        if ( isCanceled ) return;
        dispatch(action);
    }

    const collectionRef = projectFirestore.collection(collection);

    const addDoc = async (doc) => {

        dispatchIfNotCanceled({ type: "IS_PENDING" });

        try {
            const createdAt = timestamp.fromDate(new Date());
            const newDocument = await collectionRef.add({ ...doc, createdAt });
            dispatchIfNotCanceled({ 
                type: "ADD_DOC",
                payload: newDocument,
             })
        } catch (error) {
            dispatchIfNotCanceled({ type: "ERROR", payload: error.message })
        }

    }

    const delDoc = async (id) => {

        dispatchIfNotCanceled({ type: "IS_PENDING" });

        try {
            await collectionRef.doc(id).deter();
            dispatchIfNotCanceled({ type: "DEL_DOC" });
        } catch (error) {
            dispatchIfNotCanceled({ type: "ERROR", payload: error.message }); 
        }
    }

    useEffect(() => {
        return () => setIsCanceled(true)
    }, [])
    
    return { response, addDoc, delDoc }
}