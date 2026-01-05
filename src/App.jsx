
import Home from "./components/home"
import Login from "./components/login"
import Job from "./components/job"
import NotFound from './components/notfound'
import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/protectedRoute"

const App = () => (
  <Routes>
    <Route path='/' element={<ProtectedRoute Component={Home} />}></Route>

    <Route path='/login' element={<Login />}></Route>

    <Route path='/job' element={<ProtectedRoute Component={Job} />}></Route>

    <Route path="/*" element={<NotFound />}></Route>


  </Routes>

)

export default App
