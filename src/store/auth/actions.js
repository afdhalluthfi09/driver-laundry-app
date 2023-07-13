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
    },
    authActionLogout:(_,{payload})=>{
        console.log(payload);
       return new Promise((resolve,reject)=>{
            axios.post(`/logout-employes/${payload.tokenId}`).then((response)=>{
                localStorage.removeItem('data')
                localStorage.removeItem('token')
                resolve(response.data)
            }).catch((error)=>{
                console.log(error)
                reject(error);
            })
        })
    },
    authActionResetPassword:(_,{payload})=>{
        //change-password-karyawan
        console.log(payload);
        return new Promise((resolve,reject)=>{
            axios.post(`/change-password-karyawan/${payload.tokenId}`,payload).then((response)=>{
                resolve(response.data)
            }).catch((error)=>{
                console.log(error);
                reject(error)
            })
        })
    }
}

export default actions;