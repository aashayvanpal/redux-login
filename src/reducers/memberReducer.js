import { addMember, getMembers, deleteMember } from "../axios-requests/Member"

export const memberReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_MEMBER":
            {
                console.log('inside ADD_MEMBER reducer', action.payload)
                // axios to post member details
                return addMember(action.payload)
                    .then(result => result)
                    .catch(err => err)

            }
        case "GET_MEMBERS":
            {
                console.log('inside GET_MEMBERS reducer')
                // axios to get member details
                return getMembers()
                    .then(result => result)
                    .catch(err => err)
            }
        case "DELETE_MEMBER":
            {
                console.log('inside DELETE_MEMBER reducer')
                // axios to delete member details
                return deleteMember(action.payload)
                    .then(result => result)
                    .catch(err => err)
            }
        default:
            return state
    }
}