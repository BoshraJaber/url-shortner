import heroImage from "../../../assets/images/illustration-working.svg";
import "./Hero.css";

const Hero = () => {
    return (
        <>
            <section className="hero">
                <section className="content">
                    <section className="text-content">
                        <h1 className="hero-text">More than just shorter links</h1>
                        <p className="text">
                            Build your brand’s recognition and get detailed insights on how your
                            links are performing.
                        </p>
                        <button>Get Started</button>
                    </section>
                    <section className="hero-bg">
                        <img src={heroImage} alt="illustration working" />
                    </section>
                </section>
            </section>
        </>
    )
}

export default Hero;