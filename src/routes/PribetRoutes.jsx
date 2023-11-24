import PropTypes from "prop-types";
import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate } from "react-router-dom"

const PribetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <h1>Loading...</h1>
    }
    else if (!user) {
        return <Navigate to="/login" />
    }
    return children
}

PribetRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PribetRoutes