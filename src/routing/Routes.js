import react from 'react';
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'
import LazyLoading from '../components/lazy-loading/LazyLoading';

const Router = () => {
    return (
    <AppRouter>
        <Switch>
            <Route path="/lazy" render={() => <LazyLoading />} />
        </Switch>
    </AppRouter>
    )
}

export default Router;