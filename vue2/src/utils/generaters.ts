export const generateHeaders = (token:string) => {
    const headers = {
    Authorization: token,
    accept: "application/json",
    "Content-Type":"application/json",
    }
    return headers
}

export const generatePostHeader = (token:string) => {
    const headers = {
        Authorization: token,
        accept: "application/json",
        "Content-Type":"application/json",
    }
    const method = "POST"
    return {headers, method}
}

export const generateAllRequestOptions = (token: string,obj:any) => {
    const headers = {
        Authorization: token,
        accept: "application/json",
        "Content-Type":"application/json",
    }
    const method = "POST"
    const body = JSON.stringify(obj)
    return {headers, method, body}
}