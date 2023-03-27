import axios from 'axios';
axios.defaults.basURL = 'http://localhost:3000'; //서버주소
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Contro-Allow-Origin']='*';
export default {
    methods: {
        async $api(
            url,method,data
        ){
            return (await axios({
                method:method,
                url,
                data
            }).catch(e=>{
                console.log(e);
            })).data;
        }
    }
}