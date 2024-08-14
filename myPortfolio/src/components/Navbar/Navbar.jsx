
import { NavLink } from 'react-router-dom'
import DarkModeBtn from '../DarkModeBtn/DarkModeBtn'

import './style.css'
function Navbar() {
    const activeLink = 'nav-list__link nav-list__link--active'
    const defaultLink = 'nav-list__link'

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to='/' className="logo">
                        &lt;Daniil &#8260;&gt; 
                    </NavLink>

                    <DarkModeBtn/>
                    

                    <ul className="nav-list">


                        <li className="nav-list__item" ><NavLink to="/" className={({isActive}) => isActive ? activeLink : defaultLink}>
                            Home
                        </NavLink></li>

                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : defaultLink}>
                                Projects
                            </NavLink>

                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : defaultLink}>
                                Contacts
                            </NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar