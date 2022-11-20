import "./Footer.css";
import Logo from "../../assets/images/logo.svg";
import Facebook from "../../assets/images/icon-facebook.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Pinterest from "../../assets/images/icon-pinterest.svg";

const Footer = () => {
    return (<>


        <section className="footer">
            <section className="container-footer">
                <section className="logo">
                    <img src={Logo} alt="logo" />
                </section>

                <section>
                    <ul className="footer-links">
                        <li className="white">Features</li>
                        <li><a href="/">Link Shortening</a></li>
                        <li><a href="/">Branded Links</a></li>
                        <li><a href="/">Analytics</a></li>
                    </ul>
                </section>
                <section>
                    <ul className="footer-links">
                        <li className="white">Resources</li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Developers</a></li>
                        <li><a href="/">Support</a></li>
                    </ul>
                </section>
                <section>
                    <ul className="footer-links">
                        <li className="white">Company</li>
                        <li><a href="/">About</a> </li>
                        <li><a href="/">Our Team</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </section>
                <section className="social">
                    <a href="https://facebook.com"><img src={Facebook} alt="Facebook Icon" /></a>
                    <a href="https://twitter.com"><img src={Twitter} alt="Twitter Icon" /></a>
                    <a href="https://pinterest.com"><img src={Pinterest} alt="Pinterest Icon" /></a>
                    <a href="https://instagram.com"><img src={Instagram} alt="Instagram Logo" /></a>
                </section>
            </section>
        </section>

    </>)
}

export default Footer;