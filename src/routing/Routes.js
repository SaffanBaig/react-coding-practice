import react from 'react';
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'
import LazyLoading from '../components/lazy-loading/LazyLoading';
import MemoComponent from '../components/memoization/MemoComponent';

const Router = () => {
    return (
    <AppRouter>
        <Switch>
            <Route path="/lazy" render={() => <LazyLoading />} />
            <Route path="/memo" render={() => <MemoComponent />} />
        </Switch>
    </AppRouter>
    )
}

export default Router;