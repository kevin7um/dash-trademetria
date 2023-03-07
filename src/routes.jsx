import {Fragment, useState} from "react";
import Modal from 'react-modal';
import {BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedLayout } from "./components/ProtectedLayout";
import { AuthProvider } from "./context/AuthProvider/auth";
import { RedefinedPasswordModal } from './components/RedefinedPasswordModal';

import {DashboardApp} from './pages/DashboardApp';
import {SignIn} from './pages/SignIn';
import {SignUp} from './pages/SignUp';
import { Imports } from "./pages/Imports";
import { Profile } from "./pages/Profile";

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
                        <Route exact path="/dashboard" element={<ProtectedLayout><DashboardApp/></ProtectedLayout>} />
                        <Route path="/perfil" element={<Profile/>} />
                        <Route path="/importar" element={<Imports/>} />
                        <Route index path="/" element={<SignIn openModal={handleOpenRedefinedPasswordModal}/>} />
                        <Route exact path="/signup" element={<SignUp/>} />
                        <Route path="*" element={ <DashboardApp/> } />
                    </Routes>
                </Fragment>
            </BrowserRouter>
        </AuthProvider>
      
    );
}