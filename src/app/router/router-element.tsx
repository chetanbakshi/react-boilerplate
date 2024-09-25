import { Navigate } from "react-router";
import { routerSuspense } from './router-suspense';
import React from "react";

export const RouteElement: React.FC = (routes: any) => {
    const loadElement = (obj: any) => {
        if (obj.children) {
            return {
                ...obj, element: routerSuspense(obj.params ? <obj.element params={obj.params} /> : <obj.element />), children: RouteElement(obj.children)
            }
        } else if (obj.navigate) {
            return { ...obj, element: <Navigate to={obj.navigate} replace={true} /> }
        } else {
            return {
                ...obj, element: routerSuspense(obj.params ? <obj.element params={obj.params} /> : <obj.element />)
            }
        }
    }

    return routes.map((ele: any) => {
        return loadElement(ele);
    })
}