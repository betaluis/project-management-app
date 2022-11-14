import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, Login, Signup, Navbar } from './components'
import { useAuthContext } from './hooks'

function App() {

  const { user, authIsReady } = useAuthContext()

  return (
    <div className="flex flex-col h-screen">
      {authIsReady ?
        <BrowserRouter>
          <div className='flex-none'>
            <Navbar />
          </div>
          <div className="grow">
            <Routes>
              <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
              <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
            </Routes>
          </div>
          <div className='flex-none'>Footer</div>
        </BrowserRouter>
        : null}
    </div>
  );
}

export default App;
