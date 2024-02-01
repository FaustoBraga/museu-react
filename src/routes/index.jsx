import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLogin from "../pages/PageLogin"

const Ways = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<PageLogin/>}>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Ways;