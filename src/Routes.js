import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadingScreen } from './pages/loadingScreen';
import { loginScreen } from './pages/loadingScreen';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <loadingScreen />
                </Route>
                <Route path = "/screen/:screen1 ">
                    <loginScreen />
                </Route>
            </Switch>
        </Router>
    )
}