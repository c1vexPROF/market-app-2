import { api } from '../api/api'

export const requestTest = () => {
    return api.getTest()
}