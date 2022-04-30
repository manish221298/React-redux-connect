import axios from "axios"

export const setData = (data) => {
    return {type: 'SET_DATA', payload: data}
}

export const startGetData = () => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(res => {
            const data = res.data
            dispatch(setData(data))
            // console.log("data", data)
        })
    }
}