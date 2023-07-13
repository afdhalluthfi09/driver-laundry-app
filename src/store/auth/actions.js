import axios from "../axios";

const actions ={
    authActionLogin:({commit},{payload})=>{
        console.log(payload);
        return new Promise((resolve,reject)=>{
            axios.post('/login-karyawan',payload).then((response)=>{
                console.log(response);
                commit('setUser',response.data.data)
                resolve(response.data)
            }).catch((error)=>{
                // console.log(error);
                if(error.response.status == 424){
                    reject(error.response.data.message)
                }
            })
        })
    }
}

export default actions;