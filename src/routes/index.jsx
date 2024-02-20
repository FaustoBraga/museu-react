import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import PageLogin from "../pages/PageLogin"
import PageLayout from "../layouts/PageLayout";
import PageVisitantes from "../pages/PageVisitantes/indes";
import PageAdmin from "../pages/PageAdmin";
import { Children, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Ways = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PageLayout />}>
                    <Route index element={<PageVisitantes />} />
                </Route>
                <Route path="/login" element={<PageLogin/>}>
                    <Route index element={<PageLogin />} />
                </Route>
                <Route path="/admin" element={<ProtectedWay><PageAdmin/></ProtectedWay>}>
                    <Route index element={<PageAdmin />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

const ProtectedWay = ({children}) => {
    const {estaLogado} = useContext(AuthContext);
    return estaLogado ? children : <Navigate to={"/login"} />
}

export default Ways;