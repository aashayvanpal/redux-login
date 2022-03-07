import { addMember, getMembers } from "../axios-requests/Member"

export const memberReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_MEMBER":
            {
                console.log('inside ADD_MEMBER reducer', action.payload)
                // axios to post member details
                addMember(action.payload)

            }
        case "GET_MEMBERS":
            {
                console.log('inside GET_MEMBERS reducer')
                // axios to get member details
                getMembers()
                    .then(result => result)
                    .catch(err => err)
            }
        default:
            return state
    }
}