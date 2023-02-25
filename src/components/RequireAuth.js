import { useLocation,Outlet,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
    const location = useLocation();
    const {user,isAuth} = useSelector((state) => state.auth );

    return(
        isAuth ? user && <Outlet /> : <Navigate to={'login'} state={{from : location}} replace />
    )
}

export default RequireAuth;
