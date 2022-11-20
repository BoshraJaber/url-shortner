export const save = (urls) => {
    return {
        type: "SAVE",
        payload: urls,
    }
}

export const load = () => {
    return {
        type: "LOAD",
        payload: null,
    }
}