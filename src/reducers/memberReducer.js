import { addMember } from "../axios-requests/Member"

export const memberReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_MEMBER":
            {
                console.log('inside ADD_MEMBER reducer', action.payload)
                // axios to post member details
                addMember(action.payload)

            }
        default:
            return state
    }
}