import Loader from "modules/Loader/Loader";
import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

const RegisterPage = lazy(()=> import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(()=> import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(()=> import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import ("pages/NotFoundPage/NotFoundPage"));

const UserRouters = () => {
    return (
        <>
        <Suspense fallback={<Loader/>}>
            <Routes> 
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="*"  element={<NotFoundPage/>}/>
            </Routes>
        </Suspense>
        </>
    );
}

export default UserRouters;