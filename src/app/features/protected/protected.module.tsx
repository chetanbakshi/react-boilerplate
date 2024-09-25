import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router"
import { useTypedSelector } from "src/app/core/hooks/use-typed-selectors";
import { HeaderComponent } from './components/header';
export const ProtectedModule = () => {
    const navigate = useNavigate();
    const isLoggedIn = useTypedSelector((state) => state.auth.isLoggedIn);
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/anonymous/login');
        }
    }, [isLoggedIn]);
    return (
        <div>
            <HeaderComponent />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}