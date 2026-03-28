import React, { use } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddNewDoctor from "./components/AddNewDoctor.jsx";
import AddNewAdmin from "./components/AddNewAdmin.jsx";
import Messages from "./components/Messages.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Login from "./components/Login.jsx";
import Doctors from "./components/Doctors.jsx";
import Dashboatd from "./components/Dashboard.jsx";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "./admin_main.jsx";

const App = () => {

    const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(Context);
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         "http://localhost:4000/api/v1/user/admin/user"


    return (    
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/doctors" element={<Doctors/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/doctor/addnew" element={<div>Add New Doctor</div>} />
                    <Route path="/admin/addnew" element={<div>Add New Admin</div>} />
                    <Route path="/messages" element={<div>Messages</div>} />
                </Routes>
                <ToastContainer position='top-center' />   
            </Router>
        </>
    )
}

export default App;