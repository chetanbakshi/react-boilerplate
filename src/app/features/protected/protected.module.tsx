import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router"
import { useTypedSelector } from "src/app/core/hooks/use-typed-selectors";
import { useActionsWithEffects } from "src/app/core/hooks/use-actions-with-effects";
import { MenuType } from "src/app/core/types";
export const ProtectedModule = () => {
    const navigate = useNavigate();
    const isLoggedIn = useTypedSelector((state) => state.auth.isLoggedIn);
    const { setCurrentMenu } = useActionsWithEffects();
    useEffect(() => {
        setCurrentMenu(MenuType.PROTECTED);
        if (!isLoggedIn) {
            navigate('/anonymous/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);
    return (
        <div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}