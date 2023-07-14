import axios from "./axios";

const actions ={
    getProfile:(_,{payload})=>{
        console.log(payload);
        return new Promise((resolve,reject)=>{
            axios.get(`/employee/${payload.tokenId}`).then((response)=>{
                resolve(response.data.data)
            }).catch((error)=>{
                reject(error)
            })
        })
    },
    updateActionProfile:(_,{payload})=>{
        console.log(payload);
        return new Promise((resolve,reject)=>{
            axios.patch(`/employee/${payload.tokenId}`,payload).then((respone)=>{
                resolve(respone.data);
            }).catch((error)=>{
                reject(error)
            })
        })
    }
}

export default actions;