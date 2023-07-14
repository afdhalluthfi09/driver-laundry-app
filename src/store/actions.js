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
            await axios.post('/fcm/send', message, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer AAAA-23noHE:APA91bGmTUNyJ50QW6_3Gp3YpDeAXWQpH7nyFznpjoUaR3l-RW8Omd32txZNcrEMVUbfAFZg7MerdgIYazcZUg_5ulFkeXJLOAOeSyqmcSkrlOyvmKkuGQ4HIm9MC0ldAcldBlu0WcJZ',
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