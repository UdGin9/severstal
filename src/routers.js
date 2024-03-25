import {LOGIN_PAGE, TENDERS_PAGE} from "./consts";
import {LoginPage} from "./Components/Pages/LoginPage/LoginPage";
import {TendersPage} from "./Components/Pages/TendersPage/TendersPage";

export const AllRouters = [
    {
        path: LOGIN_PAGE,
        Component:<LoginPage/>
    },
    {
        path: TENDERS_PAGE,
        Component:<TendersPage/>
    }

]