import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import iconMenu from "../../assets/images/list.svg";
import "./Navbar.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header>
                <nav>
                    <ul className="links">
                        <section className="logo-header">
                            <img src={logo} alt="Shortly Logo" />
                        </section>
                        <section className={showMenu === true ? "responsive-nav unfold" : "responsive-nav"} >
                            <section className="nav-links">
                                <li><a href="/">Features</a></li>
                                <li><a href="/">Pricing</a></li>
                                <li><a href="/">Resources</a></li>
                            </section>
                            <section className="login">
                                <li><a href="/">Login</a></li>
                                <li className="signup"><a href="/">Sign Up</a></li>
                            </section>
                        </section>
                    </ul>

                    <li className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
                        <img src={iconMenu} alt="Mobile Menu Icon" />
                    </li>
                </nav>
            </header>
        </>
    )
}
export default Navbar;