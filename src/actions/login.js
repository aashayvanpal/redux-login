export const login = (credentials) => {
    return {
        type: 'LOGIN',
        payload: credentials
    }
}