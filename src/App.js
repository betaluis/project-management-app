import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';

// Pages
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Projects from './pages/project/Project'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <div className="App flex">
      <BrowserRouter>
        <div className='flex-grow py-0 px-16'>
          <Switch>
            <Navbar />
            <Route exact path="/">
              <Dashboard /> 
            </Route>
            <Route path="/create">
              <Create /> 
            </Route>
            <Route path="/projects/:id">
              <Projects /> 
            </Route>
            <Route path="/login">
              <Login /> 
            </Route>
            <Route path="/signup">
              <Signup /> 
            </Route>
          </Switch>
        </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;
