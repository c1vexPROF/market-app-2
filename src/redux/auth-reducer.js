const SET_USER_DATA='SET_USER_DATA';

let initialState={
    username: null,
    password: null,
}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}
export const setUserData=(username, password)=>({type: SET_USER_DATA, data:{username, password}})
export default authReducer;