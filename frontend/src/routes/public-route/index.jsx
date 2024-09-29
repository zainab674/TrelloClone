import { Landing, Auth, WorkSpace } from '../../pages';

const authenticatedRoutes = [
  {
    key: 0,
    path: '/',
    element: Landing,
  },
  {
    key: 1,
    path: '/auth',
    element: Auth,
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
