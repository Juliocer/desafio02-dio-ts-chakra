import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Conta from "./pages/conta"
import { useContext } from "react"
import { AppContext } from "./components/AppContext"

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={isLoggedIn ? <Conta/> : <Home />} />
        </Routes>
    )
}

export default MainRoutes