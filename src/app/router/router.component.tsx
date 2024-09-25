import { useRoutes } from "react-router";
import { RouteElement } from './router-element'
import { anonymousRouterVO } from './anonymous'
import { protectedRouterVO } from "./protected";
export const RouterComponent = () => {
    const param = window.location.search;
    const path = window.location.href;
    if (param.indexOf('?code=') !== -1 && path.indexOf('login') === -1) {
        window.location.href = `/#/en/login${param}`
    }
    let routes: any = [];
    // const routerCollection = (process.env.REACT_APP_ENV === 'local') ? anonymousRouterVO : anonymousRouterVO;
    const routerCollection = [...anonymousRouterVO, ...protectedRouterVO] ;
    routes = RouteElement(routerCollection);
    return useRoutes(routes);
}