import { BrowserRouter as Router, Route } from 'react-router-dom';
import { loadingScreen } from './pages/loadingScreen';
import { loginScreen } from './pages/loadingScreen';
import { homeScreen } from './pages/homeScreen';

export const Routes = () => {
    return (
        <Router>
            <Route path="/">
                <loadingScreen />
            </Route>
            <Route path = "/screen/:screen1 ">
                <loginScreen />
            </Route>
        </Router>
    )
}