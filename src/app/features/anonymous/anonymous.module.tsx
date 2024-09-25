import { Outlet, useNavigate } from "react-router";
import { HeaderComponent } from "./components/header";
import { useTypedSelector } from "src/app/core/hooks/use-typed-selectors";
import { useEffect } from "react";
const AnonymousModule: React.FC = () => {
    const navigate = useNavigate();
    const isLoggedIn = useTypedSelector((state) => state.auth.isLoggedIn);
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/protected');
        }
    });
    return (
        <div>
            <HeaderComponent />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default AnonymousModule;