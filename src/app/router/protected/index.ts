import { lazy } from "react";
import { errorLoading } from "src/app/core/utils";

const ProtectedModule = lazy(() => import("src/app/features/protected").catch((err: any) => errorLoading(err)));
const DashboardPage = lazy(() => import("src/app/features/protected/pages/dashboard").catch((err: any) => errorLoading(err)));
const SettingsPage = lazy(() => import("src/app/features/protected/pages/settings").catch((err: any) => errorLoading(err)));
export const protectedRouterVO = [
    {
        path: 'protected', element: ProtectedModule, children: [
            { path: '', navigate: `dashboard` },
            { path: 'dashboard', element: DashboardPage },
            { path: 'settings', element: SettingsPage }
        ]
    },
]