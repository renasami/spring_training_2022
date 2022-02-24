import { generateHeaders } from "./generaters"
//to tomorrow me, i wanna get group and personal chat history so i think use promise.all and params are to be id.
// export const promiseAll = async (token:string,) => {
//     const {headers, body,method} = generateAllRequestOptions(token,null)
//     talksArr =  await Promise.all([
//         fetch(`http://localhost:8080/mesage/${param}`)
//     ])
//     return talksArr
// }


//data:Object[]obj = recevierId
export const userPromiseAll = async (endpoint:string,key:string,data:[]) => {

    const result = await Promise.all(

        data.map(async (d) => {
            const headers = generateHeaders(key)
            // return await fetch(`http://localhost:8080/${endpoint}?${}`,{headers}).then(res => res.text())
        })

    )
    console.log(result)
    return result
}

export const getAllHistoryOfPersonal = async (key:string,data:[]) =>{
    const result = await Promise.all(

        data.map(async (d) => {
            const headers = generateHeaders(key)
            return await fetch(`http://api.myj-spring-training-2022.kuroi.link/message/personal_chat_history?receiver_id=${d.receiver_id}&limit=200`,{headers}).then(res => res.text())
        })

    )
    //文字形式の配列をObject形式の配列に変更する
    return result.map(res => JSON.parse(res))
}
export const getAllHistoryOfGroup = async (key:string,data:[]) =>{
    const result = await Promise.all(

        data.map(async (d) => {
            const headers = generateHeaders(key)
            return await fetch(`http://api.myj-spring-training-2022.kuroi.link/message/get_group_with_chat_histroy?group_id=${d.group_id}`,{headers}).then(res => res.text())
        })

    )
    return result.map(res => JSON.parse(res))
}
