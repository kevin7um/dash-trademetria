import {Fragment, useState} from "react";
import Modal from 'react-modal';
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ProtectedLayout } from "./components/ProtectedLayout";
import { AuthProvider } from "./context/AuthProvider/auth";
import { RedefinedPasswordModal } from './components/RedefinedPasswordModal';

import {DashboardApp} from './pages/DashboardApp';
import {SignIn} from './pages/SignIn';
import {SignUp} from './pages/SignUp';
import { Imports } from "./pages/Imports";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";

Modal.setAppElement('#root');


export function RoutesApp(){

    const [redefinedPasswordModalIsOpen, setRedefinedPasswordModalIsOpen] = useState(false);

    const handleOpenRedefinedPasswordModal = () => {
      setRedefinedPasswordModalIsOpen(true);
    }
  
    const handleCloseRedefinedPasswordModal = () => {
      setRedefinedPasswordModalIsOpen(false);
    }

    return (
        <AuthProvider>
            <RedefinedPasswordModal 
                isOpen={redefinedPasswordModalIsOpen} 
                onRequestClose={handleCloseRedefinedPasswordModal} 
            />
            <BrowserRouter>
                <Fragment>
                    <Routes>
                        <Route 
                            path="/" 
                            element={<ProtectedLayout><Home/></ProtectedLayout>}  
                        >
                            <Route path="/" element={<DashboardApp/>} />
                            <Route path="/perfil" element={<Profile/>} />
                            <Route path="/importar" element={<Imports/>} />
                        </Route>

                        <Route path="/signin" element={<SignIn openModal={handleOpenRedefinedPasswordModal}/>} />
                        <Route path="/signup" element={<SignUp/>} />
                        <Route path="*" element={<Navigate to='/' />} />
                    </Routes>
                </Fragment>
            </BrowserRouter>
        </AuthProvider>
      
    );
}