import makeLoginRequest from "../axios-requests/login"

export const loginReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            {
                console.log('inside login reducer',action.payload)
                // axios to get user
                makeLoginRequest(action.payload)

            }
        default:
            return state
    }
}