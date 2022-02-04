import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
    <nav className='navBar-content'>
        <Link to="/" className='navBar-title' title='Go Home'>
            Bootcamp DevSuperior
        </Link>
    </nav>
);

export default Navbar;