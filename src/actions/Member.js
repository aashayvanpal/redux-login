export const addMember = (details) => {
    return {
        type: 'ADD_MEMBER',
        payload: details
    }
}


export const getMembersAction = () => {
    return {
        type: 'GET_MEMBERS',
    }
}