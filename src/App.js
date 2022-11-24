import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components'
import { Dashboard, SignIn, SignUp, Create, Project } from './pages'
import { useAuthContext } from './hooks'
import Sidebar from './components/Sidebar'

function App() {

    const { user, authIsReady } = useAuthContext()

    return (
        <div className="flex bg-background min-h-screen">
            {authIsReady ?
                <BrowserRouter>
                    {!user ? null : <Sidebar />}
                    <div className="grow px-16">
                        <Navbar />
                        <Routes>
                            {/* user signed in*/}
                            <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
                            <Route path="/create" element={user ? <Create /> : <Navigate to="/login" />} />
                            <Route path="/projects/:id" element={user ? <Project /> : <Navigate to="/login" />} />

                            {/* user NOT signed in*/}
                            <Route path="/login" element={user ? <Navigate to="/" /> : <SignIn />} />
                            <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
                        </Routes>
                    </div>
                </BrowserRouter>
                : null}
        </ div>
    );
}

export default App;
