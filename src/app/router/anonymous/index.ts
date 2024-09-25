import { lazy } from "react";
import { errorLoading } from "src/app/core/utils";

const AnonymousModule = lazy(() => import("src/app/features/anonymous").catch((err: any) => errorLoading(err)));
const HomePage = lazy(() => import("src/app/features/anonymous/pages/home").catch((err: any) => errorLoading(err)));
const AboutUsPage = lazy(() => import("src/app/features/anonymous/pages/about-us").catch((err: any) => errorLoading(err)));
const ContactUsPage = lazy(() => import("src/app/features/anonymous/pages/contact-us").catch((err: any) => errorLoading(err)));
const LoginPage = lazy(() => import("src/app/features/anonymous/pages/login").catch((err: any) => errorLoading(err)));

export const anonymousRouterVO = [
    { path: '', navigate: `anonymous` },
    {
        path: 'anonymous', element: AnonymousModule, children: [
            { path: '', navigate: `home` },
            { path: 'home', element: HomePage },
            { path: 'about-us', element: AboutUsPage },
            { path: 'contact-us', element: ContactUsPage },
            { path: 'login', element: LoginPage }
        ]
    },
]
