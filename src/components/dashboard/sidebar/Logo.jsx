import { Link } from 'react-router-dom'
import Pogo from "../../navbar/Logo"

const Logo = () => {
    return (
        <Link to='/' >
            <Pogo />
        </Link>
    )
}

export default Logo
