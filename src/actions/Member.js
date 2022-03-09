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

export const deleteMemberAction = (id) => {
    return {
        type: 'DELETE_MEMBER',
        payload: id
    }
}