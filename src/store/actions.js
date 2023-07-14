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
    },
    sendNotification:async (_,{token, title, body}) => {
        
        try {
            const message = {
              token,
              notification: {
                title,
                body,
              },
            };
            await axios.post('https://fcm.googleapis.com/fcm/send', message, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 3a36da7f845d04a7709d288d94550e1f88952616',
                'Access-Control-Allow-Origin':'*'
              },
            })
            .then(response => {
              console.log('Notifikasi berhasil dikirim:', response.data);
            })
            .catch(error => {
              console.error('Gagal mengirim notifikasi:', error);
            });
            
        } catch (error) {
            console.log(error);
        }
      
      }
}

export default actions;