import _superagent from "superagent";
import { Config } from "../config.js";


/**
 * 接口请求封装  使用superagent发送请求
 * @param {*} url
 * @param {*} method
 * @param {*} params
 * @param {*} data
 * @param {*} cookies
 */
export function req(url: any, method: any, params: any, data?: any, cookies?: any) {
    return new Promise(function (resolve, reject) {
        _superagent(method, url)
            .query(params)
            .send(data)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .end(function (err: any, response: any) {
                if (err) {
                    reject(err)
                }
                resolve(response)
            })
    })
}

export function reqApi(url: any, method: any, params: any, data?: any) {
    Config
    return new Promise(function (resolve, reject) {
        console.log(`${Config.httpProxy}${Config.adminPath}${url}`)
        _superagent(method, `${Config.httpProxy}${Config.adminPath}${url}`)
            .query(params)
            .send(data)
            .set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
            .set('x-ajax', 'json')
            .then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
        })
    })
}
