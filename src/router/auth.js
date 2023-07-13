import  { useRouter } from 'vue-router';

export function requireAuth(to,from,next){
    const router =useRouter();
    let isLoggedIn =(localStorage.getItem('token') == null) ? true : false;
    
    if(!isLoggedIn){
        next();
    }else{
        router.push('/login');
    }
}