import { apiConnector } from "../apiConnector";

import { userEndpoint } from "../api";
import {PARAMS_FOOD_API } from  "../api"

const { QUERY_FOOD_API} = userEndpoint;

  export const getUserFoodParams1 = async (foodName) => {
    try{

      const res = await apiConnector("GET", PARAMS_FOOD_API ,null, null, { foodName })
    } catch(err){
        console.log("err in food ",err)
    }
  };


  export const getUserFoodParams = async (foodName) => {
    try {
      const res = await apiConnector("GET", PARAMS_FOOD_API(foodName), null, null, { foodName })
    } catch (err) {
      console.log("err in food ", err)
    }
  };

  export const searchFood = async () => {
    // const endpoint = userEndpoints.FOOD_API;
    const method = 'GET';
    // return apiConnector( method,endpoint);
  };