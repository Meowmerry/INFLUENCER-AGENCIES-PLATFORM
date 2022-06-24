import { useAxios, baseURL } from "../../helper";
import { ENDPOINT } from "../../endpoint";
import {getSession} from '../../helper'

const token = getSession();
console.log('token==>', token)
const getInfluencerProfile = async () => {
  try {
    const res = await useAxios.get(`${baseURL}${ENDPOINT.GET_INFLU_PROFILE}`, {
      headers: {
        Authorization: "Bearer " + token
      },
    });
    return res;
  } catch (error: any) {
    console.log("error-->", error);
    return error;
  }
};


export {getInfluencerProfile}