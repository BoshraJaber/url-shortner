
const history = JSON.parse(localStorage.getItem("urls")) || [];

const reducer = (state = history, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SAVE":
            // save new urls to local storage and update the state
            const newState = history.push({ url: payload.url, shortUrl: payload.shortUrl })
            localStorage.setItem("urls", JSON.stringify(newState))
            return newState;

        case "LOAD":
            return JSON.parse(localStorage.getItem("urls"));

        default:
            return state;
    }

}

export default reducer;
