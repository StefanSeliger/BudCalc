import { NavLink } from "react-router-dom";

const Footer = () => {
    return (  
        <nav>
            <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'purple' : 'pink' })}>
                            Home
            </NavLink>
            <NavLink to="/overview" style={({ isActive }) => ({ 
                            color: isActive ? 'purple' : 'pink' })}>
                            Overview
            </NavLink>
            <NavLink to="/fix" style={({ isActive }) => ({ 
                            color: isActive ? 'purple' : 'pink' })}>
                            Fix
            </NavLink>
        </nav>
    );
}
 
export default Footer;