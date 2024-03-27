import {LOGIN_PAGE, TENDERS_PAGE} from "./consts";
import {LoginPageContainer} from "./Components/Pages/LoginPage/LoginPage";
import {TendersPageContainer} from "./Components/Pages/TendersPage/TendersPage";

export const AllRouters = [
    {
        path: LOGIN_PAGE,
        Component:<LoginPageContainer/>
    },
    {
        path: TENDERS_PAGE,
        Component:<TendersPageContainer/>
    }

]