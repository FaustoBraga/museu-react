import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLogin from "../pages/PageLogin"
import PageLayout from "../layouts/PageLayout";
import PageHome from "../pages/PageHome";

const Ways = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PageLayout />}>
                    <Route index element={<PageHome />} />
                </Route>
                <Route path="/login" element={<PageLogin/>}>
                    <Route index element={<PageLogin />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Ways;