const mutations ={
    setError:(state,payload)=>{
        state.error = payload
    },
    setUser:(state,payload)=>{
        localStorage.setItem('data',JSON.stringify(payload));
        localStorage.setItem('token',JSON.stringify(payload.token));
        state.user =JSON.parse(localStorage.getItem('data'));
    }
}

export default mutations;