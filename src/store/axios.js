import axiosbase from 'axios';

/* configurasi costume axios agar mengurangi refactory */
// step 1: buat variable configure
const axios =axiosbase.create({  
    baseURL:'http://elaundry-api.test/api/v1',
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin' :'*'
    }
})
axios.interceptors.request.use((config)=>{
    if(config.url === '/login-karywan'){
        delete config.headers.Authorization;
    }else if(config.url === '/register-karyawan'){
        delete config.headers.Authorization;
    }else {
        // Jika endpoint memerlukan token, set header Authorization
        config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`; // Gantikan dengan token yang valid
      }

    return config;
},(error)=>{
    return Promise.reject(error)
});

export default axios;