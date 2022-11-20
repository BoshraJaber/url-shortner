import { useState } from "react";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";


const List = ({ shortUrl, longUrl }) => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setCopy(true);
    };


    return (
        <>

            <li>
                <section className="url">{longUrl}</section>
                <section className="short-copy">
                    <p className="short">
                        {shortUrl}
                    </p>
                    <button
                        className="copy-btn"
                        onClick={handleCopy}
                        style={{ background: copy === true ? "#3b3054" : "" }}
                    >
                        {copy === true ? "Copied!" : "Copy"}
                    </button>
                </section>
            </li>

        </>
    )
}

export default List;