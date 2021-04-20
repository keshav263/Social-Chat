const initialState={
    username:"",
    phoneNumber:"",
    isAuth:false,
    setDidTryLogin:false
}

export default function AuthReducer (state=initialState,action){
    switch (action.type) {
        default:
            return state;
    }
}