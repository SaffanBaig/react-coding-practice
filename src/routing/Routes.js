import react from 'react';
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'
import CustomHooks from '../components/custom-hooks/CustomHooks';
import LazyLoading from '../components/lazy-loading/LazyLoading';

const Router = () => {
    return (
    <AppRouter>
        <Switch>
            <Route path="/lazy" render={() => <LazyLoading />} />
            <Route path="/custom-hooks" render={() => <CustomHooks />} />
        </Switch>
    </AppRouter>
    )
}

export default Router;