import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const { REACT_APP_BASE_URL = 'http://localhost:3000/api' } = process.env;

const App = () => {
    const [routines, setRoutines] = useState([]);
    const [token, setToken] = useState([]);
    const [token, setToken] = useState('');

    const fetchRoutines = async () => {
        const resp = await fetch(`${REACT_APP_API_URL}/routines`);
        @@ -19, 7 + 20, 15 @@ const App = () => {

            useEffect(() => {
                fetchRoutines();
            }, [token])
        }, [token]);

        useEffect(() => {
            const foundToken = localStorage.getItem('token');
            if (foundToken) {
                setToken(foundToken)
            }
        }, []);

        return <div>
            Hello World
            <Route exact path="/">
        @@-28,10 +37,13 @@const App = () => {
    <Route exact path="/activities">
      <div>Activities</div>
    </Route>
    <Route exact path="/login">
      <Login setToken={setToken}/>
    </Route>
    <Route exact path="/routines">
      <h1>Routines</h1>
      {
        routines.map((routine) => <div>{routine.name}</div>)
        routines.map((routine) => <div key={routine.id}>{routine.name}</div>)
      }
    </Route>
  </div>
    }
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById('app'),
    );