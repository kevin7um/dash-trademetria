
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider/useAuth";

export const ProtectedLayout = ({children}) => {
    const auth = useAuth();

    if(!auth.email){
       
       return <Navigate to="/signin"/>;
    }

    return children;
};