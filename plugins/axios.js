import { Message } from "element-ui";

export default function({$axios,redirect}){
    $axios.onErr(err=>{
        const {statusCode,message}=err.response.data
    })
}