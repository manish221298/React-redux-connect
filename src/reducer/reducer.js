const initialInputState = {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}

const useReducer = (state = initialInputState, action) => {
    switch(action.type){
        case 'SET_DATA': {
            return {...action.payload}
        }
        default: {
            return {...state}
        }
    }
}

export default useReducer