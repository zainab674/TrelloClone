// import { HomePage, ProfilePage } from "../../pages"; 
import { Landing, Auth, WorkSpace, BoardPage } from '../../pages';

const authenticatedRoutes = [

    {
        key: 0,
        path: '/workspace',
        element: WorkSpace,
    },
    {
        key: 1,
        path: '/',
        element: Landing,
    },
    {
        key: 2,
        path: '/boardpage/:id',
        element: BoardPage,
    },
];

function withNavigationWatcher(Component, path) {
    const WrappedComponent = function (props) {
        return <Component {...props} />;
    };
    return <WrappedComponent />;
}
export default authenticatedRoutes.map((route) => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path),
    };
});