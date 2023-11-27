import PropTypes from "prop-types";
import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import useGetRole from "../hooks/useGetRole"
import { Navigate, useLocation } from "react-router-dom";


const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const { role, isLoading } = useGetRole(user, loading)
    const location = useLocation()
    if (loading || isLoading) {
        return <h1>Loading.....</h1>
    }
    if (user && role === "Admin") {
        return children
    }
    return <Navigate to="/dashboard" state={location?.pathname} replace />
}
AdminRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminRoutes