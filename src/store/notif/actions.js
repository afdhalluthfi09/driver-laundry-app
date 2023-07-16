import axios from "../axios";

const actions ={
    notifUnread:(_,{payload})=>{
        console.log(payload);
        return new Promise((resolve,reject)=>{
            axios.get(`/notif-task-employee/${payload.tokenId}`).then((response)=>{
                resolve(response.data);
            }).catch((error)=>{
                reject(error);
            })
        })
    }
}

export default actions;