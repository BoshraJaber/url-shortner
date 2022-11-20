import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { save, load } from "../../../store/actions";
import List from './List';
import "./Form.css";

const Form = () => {
    const [longUrl, setLongUrl] = useState(""); // user input (long url)
    const [shortUrl, setShortUrl] = useState(""); // short url from API
    const [empty, setEmpty] = useState(false);
    const [loader, setLoader] = useState();

    const urls = useSelector(state => state)

    const dispatch = useDispatch();

    const fetchShortenUrl = (url) => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then(response => response.json())
            .then(result => {
                let shortUrl = JSON.stringify(result["result"]["full_short_link"]);
                setShortUrl(shortUrl.replaceAll('"', ""));
                setLoader(false);
                dispatch(save({ longUrl, shortUrl }))
            })
    }


    const handleChange = (e) => {
        setLongUrl(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (longUrl === "") setEmpty(true);
        else {
            setLoader(true);
            setEmpty(false);
            fetchShortenUrl(longUrl)

        }

        e.target.reset();
    };

    useEffect(() => {
        dispatch(load())

    }, [])

    return (
        <>
            <section className="urlShortener">
                <section className="container">
                    <form className="form" onSubmit={handleSubmit}>
                        <input
                            type="url"
                            name="url"
                            placeholder="Shorten a link here..."
                            className={empty === true ? "error-input" : ""}
                            onChange={handleChange}
                        />

                        <button className="shorten-btn" type="submit">
                            Shorten It!
                        </button>
                    </form>
                    <p
                        className="error"
                        style={{ display: empty === true ? "block" : "none" }}
                    >
                        <i>Please add a link</i>
                    </p>
                </section>
                <ul className="short-link">
                    {urls && urls.map((item, idx) => <List
                        key={idx}
                        shortUrl={item.shortUrl}
                        longUrl={item.longUrl}
                    />)}
                </ul>
            </section>
        </>
    )
}

export default Form;