import {req, reqApi} from "../utils/superagent.js";
import {encryptByBase64} from "../utils/cipher.js";


export class Demo {

    static async getMvImg() {
        const url = "https://api.gmit.vip/Api/MvImg";
        try {
            let res:any = await req(url, "GET", {})
            console.log(res.text)
            let content = JSON.parse(res.text);
            if (content.code === '200') {
                return content.data.url;
            } else {
                console.log("获取接口失败", content.msg);
            }
        }catch (err) {
            console.log("获取接口失败", err);
        }
    }

    static async loginApi() {
        const url = "/login";
        try {
            let res:any = await reqApi(url, "POST", {
                '__sid': '',
                '__ajax':'json'
            },{
                username: encryptByBase64('system'),
                password: encryptByBase64('admin')
            })
            console.log(JSON.parse(res.text))
        }catch (e) {
            console.log('==>', e)
        }
    }
}