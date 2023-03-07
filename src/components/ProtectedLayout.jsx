
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider/useAuth";

export const ProtectedLayout = ({children}) => {
    const auth = useAuth();
    const location = useLocation();


    if(!auth.email){
       
       return <Navigate to="/"/>;
    }

    return children;
};