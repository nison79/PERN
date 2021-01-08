import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Users from './routes/Users'
import UsersUpdate from './routes/UsersUpdate'
import UsersDetailsPage from './routes/UsersDetailsPage'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
              <Route exact path='/' component={Users} />
              <Route exact path='/users/:id/update' component={UsersUpdate} />
              <Route exact path='/users/:id' component={UsersdetailsPage} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
