const BASE_URL = "http://localhost:4000/api/v1/food" || process.env.REACT_APP_BASE_URL


export const userEndpoint = {
    QUERY_FOOD_API : BASE_URL + `/user/search?food=`
}
export const PARAMS_FOOD_API = (foodName) => `${BASE_URL}/user/searchFood/${foodName}`;



export const AdminEndpoints = {
    CREATE_API : `${BASE_URL}/create`
}