import { Outlet, useNavigate } from "react-router";
import { useTypedSelector } from "src/app/core/hooks/use-typed-selectors";
import { useEffect } from "react";
import { useActionsWithEffects } from "src/app/core/hooks/use-actions-with-effects";
import { MenuType } from "src/app/core/constant";
const AnonymousModule: React.FC = () => {
    const navigate = useNavigate();
    const { setCurrentMenu } = useActionsWithEffects();
    const isLoggedIn = useTypedSelector((state) => state.auth.isLoggedIn);
    useEffect(() => {
        setCurrentMenu(MenuType.ANONYMOUS);
        if (isLoggedIn) {
            navigate('/protected');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default AnonymousModule;