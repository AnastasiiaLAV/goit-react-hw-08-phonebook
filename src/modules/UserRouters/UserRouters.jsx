import Loader from "modules/Loader/Loader";
import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

import PrivateRoute from "modules/PrivateRoute/PrivateRoute";
import PublicRoute from "modules/PublicRoute/PublicRoute ";

const RegisterPage = lazy(()=> import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(()=> import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(()=> import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import ("pages/NotFoundPage/NotFoundPage"));

const UserRouters = () => {
    return (
        <>
        <Suspense fallback={<Loader/>}>
            <Routes> 
                <Route element={<PublicRoute/>}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                <Route path="*"  element={<NotFoundPage/>}/>
            </Routes>
        </Suspense>
        </>
    );
}

export default UserRouters;