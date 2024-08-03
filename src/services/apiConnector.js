import axios from 'axios'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const axiosInstance = axios.create({});

export const apiConnector = (method , url , bodyData  , headers , params) => {
    return axiosInstance ({
        method:`${method}`,
        url : `${url}`,
        data:bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params : params ? params : null,
    });
}


