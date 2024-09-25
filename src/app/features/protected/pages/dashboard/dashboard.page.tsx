import { useTypedSelector } from "src/app/core/hooks/use-typed-selectors"
import './dashboard.style.scss';
export const DashboardPage = () => {
    const userInfo = useTypedSelector((state) => state.auth.userInfo);
    return (
        <div className="dashboard-page-wrapper">
            <p>Hello <i>{userInfo ? `${userInfo.firstName} ${userInfo.lastName}` : ""}</i>. Welcome to the Dashboard</p> 
        </div>
    )
}