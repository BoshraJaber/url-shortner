
const initialState = JSON.parse(localStorage.getItem("urls")) || [];

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SAVE":
            // save new urls to local storage and update the state
            const newState = [...state, payload];
            localStorage.setItem("urls", JSON.stringify(newState));
            return newState;

        case "LOAD":
            const storedUrls = JSON.parse(localStorage.getItem("urls"))
            if (storedUrls) return storedUrls
            return []
        default:
            return state;
    }

}

export default reducer;
