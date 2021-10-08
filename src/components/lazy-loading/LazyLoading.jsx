import react, {lazy, Suspense} from 'react'
const LazyContent = lazy(() => import("./LazyContent"))

const LazyLoading = () => (
    <>
        <h1>This is loaded normaly</h1>

        <Suspense fallback={<div>loading...</div>}><LazyContent /></Suspense>
    </ >
    );


export default LazyLoading;