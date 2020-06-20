import axios from 'axios';
const api = {
    login(params){
        return axios.get('http://open.duyiedu.com/api/meituan/login',{params})
    },
    register(params){
        return axios.get('http://open.duyiedu.com/api/meituan/register',{params})
    },
}

export default api