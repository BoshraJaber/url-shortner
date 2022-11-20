import "./Statistics.css";
import Brand from "../../../assets/images/icon-brand-recognition.svg";
import Detailed from "../../../assets/images/icon-detailed-records.svg";
import Custom from "../../../assets/images/icon-fully-customizable.svg";

const Statistics = () => {
    return (
        <>
            <section className="statistics">
                <section className="content">
                    <h2 className="statistics-title">Advanced Statistics</h2>
                    <p className="title-text">
                        Track how your links are performing across the web with our advanced
                        statistics dashboard.
                    </p>
                    <section className="cards">
                        <section className="card">
                            <section className="circle">
                                <img src={Brand} alt="Brand Recognition Icon" />
                            </section>
                            <h4>Brand Recognition</h4>
                            <p>
                                Boost your brand recognition with each click. Generic links don’t
                                mean a thing. Branded links help instil confidence in your
                                content.
                            </p>
                        </section>
                        <section className="card">
                            <section className="circle">
                                <img src={Detailed} alt="Detailed Records Icon" />
                            </section>
                            <h4>Detailed Records</h4>
                            <p>
                                Gain insights into who is clicking your links. Knowing when and
                                where people engage with your content helps inform better
                                decisions.
                            </p>
                        </section>
                        <section className="card">
                            <section className="circle">
                                <img src={Custom} alt="Fully Customizable Icon" />
                            </section>
                            <h4>Fully Customizable</h4>
                            <p>
                                Improve brand awareness and content discoverability through
                                customizable links, supercharging audience engagement.
                            </p>
                        </section>
                    </section>
                    <section className="line" />
                </section>
            </section>
        </>
    )
}

export default Statistics;